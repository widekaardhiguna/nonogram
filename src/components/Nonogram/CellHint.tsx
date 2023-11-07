type CellHintProps = {
  children?: React.ReactNode
}

export const CellHint = ({ children }: CellHintProps) => {
  return (
    <th className="border-2 border-neutral-700 p-1 text-white">{children}</th>
  )
}
