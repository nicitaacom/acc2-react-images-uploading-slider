import { motion } from "framer-motion"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { IoMdWarning } from "react-icons/io"

import useToast from "@/store/ui/useToast"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export function Toast() {
  const { status, subTitle, title } = useToast()

  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <motion.div
      className={twMerge(
        `fixed right-[1%] bottom-[2%] border-[1px]
      bg-foreground flex gap-x-4 w-auto max-w-[30%] rounded-lg px-4 py-2 z-[101]`,
        status === "success" && "border-success",
        status === "error" && "border-danger",
        status === "warning" && "border-warning",
      )}
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}>
      <div className="flex items-center">
        {status === "success" && <AiOutlineCheckCircle className="text-success" size={32} />}
        {status === "error" && <BiErrorCircle className="text-danger" size={32} />}
        {status === "warning" && <IoMdWarning className="text-warning" size={32} />}
      </div>
      <div className="flex flex-col w-full">
        <div className={`text-title font-bold`}>{title ? title : capitalize(status)}</div>
        <div className="text-subTitle">
          {subTitle ? (
            subTitle
          ) : status === "error" ? (
            <p className="flex flex-wrap">
              Unknown error please contact -&nbsp;
              <Link className="inline-block text-info" href="t.me/nicitaacom">
                Admin
              </Link>
            </p>
          ) : status === "success" ? (
            <p>Just success</p>
          ) : (
            <p>Warning!</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
