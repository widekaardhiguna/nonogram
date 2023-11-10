import { VariantProps, cva, cx } from "class-variance-authority"

export const rootClass = cva(
  "inline-block font-normal h-[2.5em] py-0 px-[1.25em] rounded-[0.4em] hover:cursor-pointer",
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-md",
        large: "text-lg",
      },
      color: {
        primary: "text-primary-400 hover:text-primary-600",
        secondary: "text-white hover:text-primary-400",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "primary",
    },
  }
)

export type RootVariant = VariantProps<typeof rootClass>

export const flexClass = cx("flex gap-1 items-center")

export const iconWrapperClass = cx(
  "leading-none [&_svg]:h-[1.3em] [&_svg]:w-[1.3em]"
)
