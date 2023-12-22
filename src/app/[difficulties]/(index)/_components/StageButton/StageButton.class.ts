import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

export const iconWrapperClass = cva(
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
