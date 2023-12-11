import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  RootVariant & {
    children?: React.ReactNode
  }

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, children, color, className, ...props }: IconButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={rootClass({ size, color, className })}
        {...props}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = "icon-button"

const rootClass = cva(
  "flex justify-center items-center h-[2.5em] w-[2.5em] rounded-full [&_svg]:h-[1.5em] [&_svg]:w-[1.5em]",
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
