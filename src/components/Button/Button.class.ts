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
        // primary: "text-primary-400 hover:text-primary-600",
        // secondary: "text-white hover:text-primary-400",
        // primary: "text-neutral-900 bg-primary-400 hover:bg-primary-500",
        // secondary: "text-secondary-900 bg-secondary-50 hover:bg-secondary-300",
        primary: "",
        secondary: "",
      },
      variant: {
        filled: "",
        outlined: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        class: "text-neutral-900 bg-primary-400 hover:bg-primary-500",
      },
      {
        variant: "filled",
        color: "secondary",
        class: "text-secondary-900 bg-secondary-50 hover:bg-secondary-300",
      },
      {
        variant: "outlined",
        color: "primary",
        class:
          "text-primary-400 border border-primary-400 hover:bg-primary-100/30",
      },
      {
        variant: "outlined",
        color: "secondary",
        class:
          "text-secondary-50 border border-secondary-50 hover:bg-secondary-100/30",
      },
    ],
    defaultVariants: {
      size: "medium",
      color: "primary",
      variant: "filled",
    },
  }
)

export type RootVariant = VariantProps<typeof rootClass>

export const flexClass = cx("flex gap-1 items-center")

export const iconWrapperClass = cx(
  "leading-none [&_svg]:h-[1.3em] [&_svg]:w-[1.3em]"
)
