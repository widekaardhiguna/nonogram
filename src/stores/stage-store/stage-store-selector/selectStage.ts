import { Difficulty, Stage } from "../stage-store.types"

export const selectStage = (
  stages: Stage[],
  id: string,
  difficulty: Difficulty
) => {
  return stages.find(
    (stage) => stage.id === id && stage.difficulty === difficulty
  )
}
