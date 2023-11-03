type CellHintProps = {
  children?: React.ReactNode
}

export const CellHint = ({ children }: CellHintProps) => {
  return <th className="border-2 border-slate-500 p-0">{children}</th>
}
