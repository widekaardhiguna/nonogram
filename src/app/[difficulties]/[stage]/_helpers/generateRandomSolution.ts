import { NodeVariant } from "@/components"

const generateRandomSolution = (length: number, balancer?: Balancer) => {
  balancer = balancer ?? 7

  let x: NodeVariant[][] = []

  for (let i = 0; i < length; i++) {
    let y: NodeVariant[] = []
    for (let j = 0; j < length; j++) {
      const node = getRandomVariant(balancer)
      y.push(node)
    }
    x.push(y)
  }

  return x
}

export default generateRandomSolution

type Balancer = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

const getRandomVariant = (balancer: Balancer): NodeVariant => {
  const randomNumber = Math.floor(Math.random() * 10) + 1

  if (randomNumber <= balancer) {
    return "o"
  } else {
    return "-"
  }
}
