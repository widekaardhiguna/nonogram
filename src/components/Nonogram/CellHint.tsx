import { VariantProps, cva } from "class-variance-authority"

type CellHintProps = HintWrapperVariant & {
  hints?: number[]
}

export const CellHint = ({ hints, direction }: CellHintProps) => {
  return (
    <th className="border-2 border-neutral-700 p-1 text-white font-semibold">
      <div className={hintWrapperClass({ direction: direction })}>
        {hints?.map((hint, index) => (
          <div key={index}>{hint}</div>
        ))}
      </div>
    </th>
  )
}

const hintWrapperClass = cva(
  "flex items-center justify-center gap-x-3 gap-y-1 px-2 py-1",
  {
    variants: {
      direction: { row: "flex-row", column: "flex-col" },
    },
    defaultVariants: {
      direction: "row",
    },
  }
)

export type HintWrapperVariant = VariantProps<typeof hintWrapperClass>
