"use client"

import { Fragment, useEffect, useState } from "react"
import React from "react"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { Carousel } from "react-responsive-carousel"
import { ImageListType } from "react-images-uploading"
import ImageUploading from "react-images-uploading"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { IoAdd } from "react-icons/io5"
import { UpdateDeleteButtons } from "./UpdateDeleteButtons"
import { MaxNumberWarningToast } from "./MaxNumberWarningToast"
import supabaseClient from "@/libs/supabaseClient"
import slugify from "slugify"
import useToast from "@/store/ui/useToast"
import { useLoading } from "@/store/ui/useLoading"
import { UploadButton } from "./UploadButton"

export function UploadImage() {
  const [images, setImages] = useState<ImageListType>([])
  const toast = useToast()
  const { isLoading, setIsLoading } = useLoading()

  const [isDragging, setIsDragging] = useState(false)

  async function uploadImages() {
    try {
      setIsLoading(true)

      if (images.length !== 0) {
        const imagesArray = await Promise.all(
          images.map(async image => {
            if (image?.file) {
              const { data, error } = await supabaseClient.storage
                .from("images")
                .upload(`${slugify(image.file.name)}`, image.file, {
                  upsert: true,
                })
              if (error) throw error
              const response = supabaseClient.storage.from("images").getPublicUrl(data.path)
              return response.data.publicUrl
            }
          }),
        )

        //insert in images table
        const { error } = await supabaseClient.from("images").insert({ images: imagesArray as string[] })
        if (error) {
          console.log(41, "error instering images - ", error)
          toast.show("error", "Error", error.message)
          throw error
        }
        toast.show("success", "Images uploaded to DB", "Some subTitle here")
      } else {
        toast.show("error", "No images", "Select some images to upload it to DB")
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error instanceof Error) {
        toast.show("error", "Error", error.message)
      }
    }
  }

  useEffect(() => {
    const handler = () => {
      setIsDragging(true)
    }

    // commented because I use onDragLeave={leaveHandler} to fix bug
    const leaveHandler = () => {
      // setIsDragging(false)
    }

    const dropHandler = () => {
      setIsDragging(false)
    }

    const dragEndHandler = () => {
      setIsDragging(false)
    }

    document.addEventListener("dragover", handler, true)
    // document.addEventListener("dragleave", leaveHandler, true)
    document.addEventListener("drop", dropHandler, true)
    document.addEventListener("dragend", dragEndHandler, true)

    return () => {
      document.removeEventListener("dragover", handler)
      // document.removeEventListener("dragleave", leaveHandler)
      document.removeEventListener("drop", dropHandler)
      document.removeEventListener("dragend", dragEndHandler)
    }
  }, [])

  const leaveHandler = () => {
    setIsDragging(false)
  }

  const onChange = (imageList: ImageListType) => {
    setImages(imageList)
  }

  return (
    <>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={5} dataURLKey="data_url">
        {({ onImageUpload, onImageUpdate, onImageRemove, errors, dragProps }) => (
          <section
            className={twMerge(
              "relative max-w-[33%] tablet:min-h-[180px] laptop:min-h-[240px] desktop:min-h-[320px]",
              images.length === 0 && "min-w-[33%] bg-placeholder-color",
            )}
            onClick={() => {
              images.length === 0 && onImageUpload()
            }}
            {...dragProps}
            onDragLeave={leaveHandler}>
            {images.length === 0 && (
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl whitespace-nowrap">
                Click or drop on entire screen
              </h2>
            )}
            <section
              className={twMerge(
                isDragging && "fixed inset-0 z-[4999] !bg-[rgba(0,0,0,0.6)] max-w-[100%] image-upload",
              )}
            />
            {errors?.maxNumber && <MaxNumberWarningToast errors={errors?.maxNumber} />}

            <figure
              className="relative w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px]
          tablet:w-fit object-cover group">
              <Carousel
                showArrows={false}
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                axis="horizontal"
                emulateTouch={false}
                swipeable={false}
                dynamicHeight={true}
                renderIndicator={(clickHandler, isSelected, index, label) => (
                  <>
                    <button
                      className={twMerge(
                        `hover:bg-foreground/90 duration-150 border border-black text-title bg-foreground/75 px-4 py-1`,
                        isSelected && "bg-foreground hover:bg-foreground hover:text-title",
                        index === 0 ? "rounded-s" : index === images.length - 1 && "rounded-e",
                      )}
                      onClick={clickHandler}>
                      {index + 1}
                    </button>
                    {index === images.length - 1 && (
                      <button
                        className="relative hover:bg-foreground/90 duration-150 border border-black text-title bg-foreground/75
                   rounded-e px-4 py-1 z-[101]"
                        onClick={onImageUpload}>
                        &nbsp;
                        <IoAdd
                          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-success"
                          size={18}
                        />
                      </button>
                    )}
                  </>
                )}>
                {images.map((image, index) => (
                  <Fragment key={index}>
                    <Image
                      className={twMerge(
                        `max-w-full tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] object-cover`,
                      )}
                      src={image.data_url}
                      alt={image.file?.name ?? "image"}
                      width={0}
                      height={0}
                      key={index}
                    />
                    <UpdateDeleteButtons
                      onImageUpdate={() => onImageUpdate(index)}
                      onImageRemove={() => onImageRemove(index)}
                    />
                  </Fragment>
                ))}
              </Carousel>
            </figure>
          </section>
        )}
      </ImageUploading>
      <UploadButton uploadImages={uploadImages} />
    </>
  )
}
