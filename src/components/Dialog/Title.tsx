import * as Dialog from "@radix-ui/react-dialog"
import type { DialogTitleProps } from "@radix-ui/react-dialog"
import { cx } from "class-variance-authority"

export const Title = ({ className, ...props }: DialogTitleProps) => {
  return (
    <Dialog.Title
      className={cx(
        "p-5 text-center text-2xl font-semibold tracking-wider ",
        className
      )}
      {...props}
    />
  )
}
