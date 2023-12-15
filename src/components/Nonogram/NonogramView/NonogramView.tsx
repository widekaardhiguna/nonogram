import deepCopy from "@/helpers/object/deepCopy"
import { CellHint } from "./CellHint"
import { CellNode } from "./CellNode"
import { Node, NodeVariant } from "./Node"

type NonogramViewProps = {
  rules: {
    x: number[][]
    y: number[][]
  }
  value: NodeVariant[][]
  onChange?: (value: NodeVariant[][]) => void
}

export const NonogramView = ({ rules, value, onChange }: NonogramViewProps) => {
  const onLeftClickNode = (xIndex: number, yIndex: number) => {
    let newValue = deepCopy(value)
    const nodeVariant = newValue[yIndex][xIndex]
    if (nodeVariant === "-" || nodeVariant === "x") {
      newValue[yIndex][xIndex] = "o"
    } else {
      newValue[yIndex][xIndex] = "-"
    }
    onChange?.(newValue)
  }

  const onRightClickNode = (xIndex: number, yIndex: number) => {
    let newValue = deepCopy(value)
    // console.log(xIndex, yIndex, newValue)
    const nodeVariant = newValue[yIndex][xIndex]
    if (nodeVariant === "x") {
      newValue[yIndex][xIndex] = "-"
    } else {
      newValue[yIndex][xIndex] = "x"
    }
    onChange?.(newValue)
  }

  const getCurrentNodeVariant = (xIndex: number, yIndex: number) => {
    return value[yIndex][xIndex]
  }

  return (
    <table className="border-collapse">
      <tbody>
        <tr>
          <th />
          {rules.x.map((hints, index) => (
            <CellHint direction="column" key={index} hints={hints} />
          ))}
        </tr>
        {rules.y.map((hints, yIndex) => (
          <tr key={yIndex}>
            <CellHint direction="row" hints={hints} />
            {rules.x.map((_, xIndex) => (
              <CellNode key={xIndex}>
                <Node
                  variant={getCurrentNodeVariant(xIndex, yIndex)}
                  onClick={() => {
                    onLeftClickNode(xIndex, yIndex)
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault()
                    onRightClickNode(xIndex, yIndex)
                  }}
                />
              </CellNode>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
