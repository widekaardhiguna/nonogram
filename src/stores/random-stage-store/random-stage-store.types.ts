import { NodeVariant } from "@/components"

export type Game = {
  solution: NodeVariant[][]
  rule: {
    x: number[][]
    y: number[][]
  }
}

export type CurrentClearTime = {
  startAt: Date
  finishedAt: Date | null
}

export type RandomStageStore = {
  currentClearTime: CurrentClearTime
  setCurrentClearTime: (currentClearTime: CurrentClearTime) => void
  game: Game | null
  setGame: (game: Game | null) => void
  val: NodeVariant[][] | null
  setVal: (val: NodeVariant[][]) => void
}
