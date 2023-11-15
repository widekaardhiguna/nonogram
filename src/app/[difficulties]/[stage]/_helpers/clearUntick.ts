import { NodeVariant } from "@/components"
import deepCopy from "@/helpers/deepCopy"

const clearUntick = (val: NodeVariant[][]) => {
  let newVal = deepCopy(val)
  for (let i in newVal) {
    for (let j in newVal[i]) {
      if (newVal[i][j] === "x") {
        newVal[i][j] = "-"
      }
    }
  }

  return newVal
}

export default clearUntick
