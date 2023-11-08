import { cva, cx } from "class-variance-authority"

export type NodeVariant = "o" | "x" | "-"

type NodeProps = {
  variant?: NodeVariant
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onContextMenu?: React.MouseEventHandler<HTMLButtonElement>
}

export const Node = ({ onClick, onContextMenu, variant = "-" }: NodeProps) => {
  return (
    <button
      className={rootClass}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {variant === "o" && <Tick />}
      {variant === "x" && <Untick />}
      {variant === "-" && <Empty />}
    </button>
  )
}

const Tick = () => {
  return <span className="block bg-primary-500 h-full w-full"></span>
}

const Untick = () => {
  return (
    <span className="flex items-center justify-center text-red-600 font-semibold text-xl h-full w-full">
      X
    </span>
  )
}

const Empty = () => {
  return <span className="block h-full w-full"></span>
}

const rootClass = cx(
  ["block h-12 w-12"],
  ["md:h-16 md:w-16"],
  ["lg:h-20 lg:w-20"]
)
