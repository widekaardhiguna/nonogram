import type { VariantProps } from "class-variance-authority"
import Link, { LinkProps } from "next/link"
import { IconGrid3x3 } from "@tabler/icons-react"
import { IconWrapperVariant, iconWrapperClass } from "./StageButton.class"

export type StageButtonProps = LinkProps &
  IconWrapperVariant & {
    children?: React.ReactNode
  }

export const StageButton = ({
  children,
  variant,
  ...props
}: StageButtonProps) => {
  return (
    <Link
      className={
        "flex flex-col items-center justify-center gap-1 text-md text-white capitalize hover:text-primary-400 font-normal py-[1em] px-[1em] hover:animate-zoomIn md:text-lg"
      }
      {...props}
    >
      <span className={iconWrapperClass({ variant })}>
        <IconGrid3x3 height="1.8em" width="1.8em" />
      </span>
      {children}
    </Link>
  )
}
