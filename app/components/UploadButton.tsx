"use client"

import { useLoading } from "@/store/ui/useLoading"
import { twMerge } from "tailwind-merge"

export function UploadButton({ uploadImages }: { uploadImages: () => void }) {
  const { isLoading } = useLoading()

  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-transparent border border-success rounded",
        isLoading && "opacity-50 cursor-default pointer-events-none",
      )}
      onClick={uploadImages}>
      Upload images
    </button>
  )
}
