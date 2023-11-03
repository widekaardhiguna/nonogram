import deepCopy from "@/helpers/deepCopy"
import { CellHint } from "./CellHint"
import { CellNode } from "./CellNode"
import { Node, NodeVariant } from "./Node"

type NonogramProps = {
  rules: {
    x: number[][]
    y: number[][]
  }
  value: NodeVariant[][]
  onChange?: (value: NodeVariant[][]) => void
}

export const Nonogram = ({ rules, value, onChange }: NonogramProps) => {
  const onLeftClickNode = (xIndex: number, yIndex: number) => {
    let newValue = deepCopy(value)
    const nodeVariant = newValue[yIndex][xIndex]
    if (nodeVariant === "empty" || nodeVariant === "untick") {
      newValue[yIndex][xIndex] = "tick"
    } else {
      newValue[yIndex][xIndex] = "empty"
    }
    onChange?.(newValue)
  }

  const onRightClickNode = (xIndex: number, yIndex: number) => {
    let newValue = deepCopy(value)
    // console.log(xIndex, yIndex, newValue)
    const nodeVariant = newValue[yIndex][xIndex]
    if (nodeVariant === "untick") {
      newValue[yIndex][xIndex] = "empty"
    } else {
      newValue[yIndex][xIndex] = "untick"
    }
    onChange?.(newValue)
  }

  const getCurrentNodeVariant = (xIndex: number, yIndex: number) => {
    return value[yIndex][xIndex]
  }

  return (
    <div>
      <table className="border-collapse">
        <tbody>
          <tr>
            <CellHint />
            {rules.x.map((hints, index) => (
              <CellHint key={index}>{hints}</CellHint>
            ))}
          </tr>
          {rules.y.map((hints, yIndex) => (
            <tr key={yIndex}>
              <CellHint>{hints}</CellHint>
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
    </div>
  )
}
