import { cva, cx } from "class-variance-authority"
import { ComponentPropsWithoutRef } from "react"

export type NodeVariant = "o" | "x" | "-"

type NodeProps = {
  variant?: NodeVariant
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onContextMenu?: React.MouseEventHandler<HTMLButtonElement>
  dataTestId: [number, number]
}

export const Node = ({
  onClick,
  onContextMenu,
  variant = "-",
  dataTestId,
}: NodeProps) => {
  const btnTestId = getBtnTestId(dataTestId[0], dataTestId[1])
  return (
    <button
      className={rootClass}
      onClick={onClick}
      onContextMenu={onContextMenu}
      data-testid={btnTestId}
    >
      {variant === "o" && <Tick />}
      {variant === "x" && <Untick />}
      {variant === "-" && <Empty />}
    </button>
  )
}

type TickProps = ComponentPropsWithoutRef<"span">

const Tick = (props: TickProps) => {
  return <span className="block bg-primary-500 h-full w-full" {...props}></span>
}

type UntickProps = ComponentPropsWithoutRef<"span">

const Untick = (props: UntickProps) => {
  return (
    <span
      className="flex items-center justify-center text-red-600 font-semibold text-xl h-full w-full"
      {...props}
    >
      X
    </span>
  )
}

type EmptyProps = ComponentPropsWithoutRef<"span">

const Empty = (props: EmptyProps) => {
  return <span className="block h-full w-full bg-transparent" {...props}></span>
}

const rootClass = cx(
  ["block h-12 w-12"],
  ["md:h-16 md:w-16"],
  ["lg:h-20 lg:w-20"]
)

export const getBtnTestId = (x: number, y: number) => `btn-${x},${y}`
