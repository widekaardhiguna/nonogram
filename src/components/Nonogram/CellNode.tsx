type CellNodeProps = {
  children?: React.ReactNode
}

export const CellNode = ({ children }: CellNodeProps) => {
  return <td className="border-2 border-slate-500 p-0">{children}</td>
}
