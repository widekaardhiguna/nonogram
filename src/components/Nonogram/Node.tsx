export type NodeVariant = "tick" | "untick" | "empty"

type NodeProps = {
  variant?: NodeVariant
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onContextMenu?: React.MouseEventHandler<HTMLButtonElement>
}

export const Node = ({
  onClick,
  onContextMenu,
  variant = "empty",
}: NodeProps) => {
  return (
    <button
      className="block h-20 w-20"
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {variant === "tick" && <Tick />}
      {variant === "untick" && <Untick />}
      {variant === "empty" && <Empty />}
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
