import { Difficulty, Stage } from "../stage-store.types"

export const finishedStages = (stages: Stage[], difficulty: Difficulty) => {
  return stages.filter(
    (stage) => stage.difficulty === difficulty && stage.firstClearTime !== null
  )
}
