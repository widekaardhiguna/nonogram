import { NodeVariant } from "@/components"

const generateDefaultValue = (length: number) => {
  const x: NodeVariant = "-"
  let y: NodeVariant[] = []
  let z: NodeVariant[][] = []

  for (let i = 0; i < length; i++) {
    y = [...y, x]
  }

  for (let i = 0; i < length; i++) {
    z = [...z, [...y]]
  }
  return z
}

export default generateDefaultValue
