import { VariantProps, cva } from "class-variance-authority"

export type IconButtonProps = React.ComponentPropsWithoutRef<"button"> &
  RootVariant & {
    children?: React.ReactNode
  }

export const IconButton = ({
  size,
  children,
  color,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button className={rootClass({ size, color, className })} {...props}>
      {children}
    </button>
  )
}

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
