"use client"
import useToast from "@/store/ui/useToast"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function MaxNumberWarningToast({ errors }: { errors: any }) {
  const toast = useToast()
  const router = useRouter()

  useEffect(() => {
    if (errors) {
      toast.show("warning", "Warning title", "Warning subTitle", 10000)
      router.refresh()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div></div>
}
