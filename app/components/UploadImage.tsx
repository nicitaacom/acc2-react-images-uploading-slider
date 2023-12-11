"use client"

import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { twMerge } from "tailwind-merge"

const images = [
  { src: "https://i.pinimg.com/564x/17/2c/bb/172cbb89987190d36134de61325c62e6.jpg", alt: "girl-black-style-1" },
  { src: "https://i.pinimg.com/564x/f7/22/61/f72261d243a11ae1f9f71bcd8e331dfd.jpg", alt: "breakfast-1" },
  { src: "https://i.pinimg.com/564x/89/94/76/8994768c74664105b4add642cda924e3.jpg", alt: "pizza-1" },
  { src: "https://i.pinimg.com/564x/fa/40/7b/fa407b6ca4d0893bb23d123bfec6232c.jpg", alt: "pizza-2" },
  { src: "https://i.pinimg.com/564x/45/0c/c5/450cc5342a1d1cbb55729ed944300576.jpg", alt: "pizza-3" },
]

export function UploadImage() {
  return (
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
              {index}
            </button>
          </>
        )}>
        {images.map((image, index) => (
          <Image
            className={twMerge(
              "w-[250px] tablet:aspect-video h-[500px] tablet:h-[175px] laptop:h-[200px] desktop:h-[250px] object-cover",
            )}
            src={image.src}
            alt={image.alt}
            width={1024}
            height={1024}
            key={index}
          />
        ))}
      </Carousel>
    </figure>
  )
}
