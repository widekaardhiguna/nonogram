import * as Dialog from "@radix-ui/react-dialog"
import type { DialogContentProps } from "@radix-ui/react-dialog"
import { forwardRef } from "react"

export const Content = forwardRef<HTMLDivElement, DialogContentProps>(
  (props, ref) => {
    return (
      <Dialog.Content
        ref={ref}
        className="text-white bg-secondary-900 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] w-[90vw] max-h-[600px] h-[70vh] grid grid-rows-[auto_1fr_auto] focus:outline-none data-[state=open]:animate-contentShow"
        {...props}
      />
    )
  }
)
