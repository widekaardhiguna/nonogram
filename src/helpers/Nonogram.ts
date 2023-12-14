import { NodeVariant } from "@/components"
import deepCopy from "./deepCopy"
import isEqual from "./isEqual"

type Balancer = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type NonogramEngineConstructor =
  | {
      type: "random"
      length: number
      balancer?: Balancer
    }
  | {
      type: "predefined"
      solution: NodeVariant[][]
    }

export class NonogramEngine {
  regex = /o+/g
  length: number
  solution: NodeVariant[][]
  rule: {
    x: number[][]
    y: number[][]
  }

  constructor(arg: NonogramEngineConstructor) {
    if (arg.type === "random") {
      this.length = arg.length
      this.solution = this.generateRandomSolution(arg.balancer ?? 7)
    } else {
      this.length = arg.solution.length
      this.solution = arg.solution
    }
    this.rule = this.generateRule(this.solution)
  }

  public static getInitialValue = (length: number) => {
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

  private generateRandomSolution = (balancer: Balancer) => {
    let x: NodeVariant[][] = []
    for (let i = 0; i < this.length; i++) {
      let y: NodeVariant[] = []
      for (let j = 0; j < this.length; j++) {
        const node = this.getRandomVariant(balancer)
        y.push(node)
      }
      x.push(y)
    }
    return x
  }

  private getRandomVariant = (balancer: Balancer): NodeVariant => {
    const randomNumber = Math.floor(Math.random() * 10) + 1

    if (randomNumber <= balancer) {
      return "o"
    } else {
      return "-"
    }
  }

  private generateRule = (solution: string[][]) => {
    let y: number[][] = []
    let x: number[][] = []

    solution.forEach((_, index) => {
      const ruleY = this.getRuleRow(solution, index)
      y.push(ruleY)

      const ruleX = this.getRuleCol(solution, index)
      x.push(ruleX)
    })

    return { x, y }
  }

  private getRuleRow = (solution: string[][], yIndex: number) => {
    const row = solution[yIndex]
    const rowString = row.join("")

    return this.getRule(rowString)
  }

  private getRuleCol = (solution: string[][], xIndex: number) => {
    let colString = ""
    for (let yIndex in solution) {
      colString += solution[yIndex][xIndex]
    }

    return this.getRule(colString)
  }

  private getRule = (string: string) => {
    let arr: number[] = []

    const matches = string.match(this.regex)
    if (!matches) return arr

    for (let i in matches) {
      arr.push(matches[i].length)
    }
    return arr
  }

  public static clearMark = (val: NodeVariant[][]) => {
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

  public static isEqual = (val1: NodeVariant[][], val2: NodeVariant[][]) => {
    return isEqual(val1, val2)
  }
}
