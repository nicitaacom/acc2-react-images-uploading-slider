"use client"

import { useLoading } from "@/store/ui/useLoading"
import { MdFileUpload, MdOutlineDelete } from "react-icons/md"

interface UpdateDeleteButtonsProps {
  onImageUpdate: () => void
  onImageRemove: () => void
}

export function UpdateDeleteButtons({ onImageRemove, onImageUpdate }: UpdateDeleteButtonsProps) {
  const { isLoading } = useLoading()

  return (
    <section
      className="absolute right-2 top-2 mb-4 flex flex-row items-center justify-center
               bg-foreground/50 border rounded-sm">
      <button
        className="hover:bg-active-color duration-150 px-2 py-1"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation()
          onImageUpdate()
        }}
        disabled={isLoading}>
        <MdFileUpload className="text-warning" size={22} />
      </button>
      <div className="absolute border-r h-full">&nbsp;</div>
      <button
        className="hover:bg-active-color duration-150 px-2 py-1"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.stopPropagation()
          onImageRemove()
        }}
        disabled={isLoading}>
        <MdOutlineDelete className="text-danger" size={22} />
      </button>
    </section>
  )
}
