type CellNodeProps = {
  children?: React.ReactNode
}

export const CellNode = ({ children }: CellNodeProps) => {
  return <td className="border-2 border-neutral-700 p-0">{children}</td>
}
