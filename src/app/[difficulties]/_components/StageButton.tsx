import type { VariantProps } from "class-variance-authority"
import { cva, cx } from "class-variance-authority"
import Link, { LinkProps } from "next/link"
import { IconGrid3x3 } from "@tabler/icons-react"

export type StageButtonProps = LinkProps &
  IconWrapperVariant & {
    children?: React.ReactNode
  }

const StageButton = ({ children, variant, ...props }: StageButtonProps) => {
  return (
    <Link className={rootClass} {...props}>
      <span className={iconWrapperClass({ variant })}>
        <IconGrid3x3 height="1.8em" width="1.8em" />
      </span>
      {children}
    </Link>
  )
}

export default StageButton

const rootClass = cx(
  "flex flex-col items-center justify-center gap-1 text-md text-white hover:text-primary-400 font-normal py-[1em] px-[1em]",
  "md:text-lg"
)

const iconWrapperClass = cva(
  "block text-neutral-900 rounded-md py-[0.5em] px-[0.5em]",
  {
    variants: {
      variant: {
        finished: ["bg-primary-400"],
        unfinished: ["bg-white"],
      },
    },
    defaultVariants: {
      variant: "unfinished",
    },
  }
)

export type IconWrapperVariant = VariantProps<typeof iconWrapperClass>
