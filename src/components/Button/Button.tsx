import {
  RootVariant,
  flexClass,
  iconWrapperClass,
  rootClass,
} from "./Button.class"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  RootVariant & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }

export const Button = ({
  size,
  children,
  color,
  variant,
  className,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={rootClass({ size, color, variant, className })}
      {...props}
    >
      <div className={flexClass}>
        {leftIcon && <span className={iconWrapperClass}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={iconWrapperClass}>{rightIcon}</span>}
      </div>
    </button>
  )
}
