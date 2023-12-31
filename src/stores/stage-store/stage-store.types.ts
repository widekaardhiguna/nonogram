export type Difficulty = "easy" | "medium" | "hard"
export type Status = "onprogress" | "finished"

export type Stage = {
  id: string
  difficulty: Difficulty
  status: Status
  startAt: string | null
  finishedAt: string | null
  firstClearTime: Duration | null
}

export type StageStore = {
  stages: Stage[]
  setStages: (stages: Stage[]) => void
  newStage: (id: string, difficulty: Difficulty) => void
  restartStage: (id: string, difficulty: Difficulty) => void
  setStageFinish: (id: string, difficulty: Difficulty, finish: Date) => void
  setStageFirstClear: (id: string, difficulty: Difficulty) => void
  setStageClearDate: (id: string, difficulty: Difficulty) => void
}
