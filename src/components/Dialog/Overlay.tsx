import * as Dialog from "@radix-ui/react-dialog"
import type { DialogOverlayProps } from "@radix-ui/react-dialog"
import { forwardRef } from "react"

export const Overlay = forwardRef<HTMLDivElement, DialogOverlayProps>(
  (props, ref) => {
    return (
      <Dialog.Overlay
        ref={ref}
        className="bg-secondary-950/90 fixed inset-0"
        {...props}
      />
    )
  }
)
