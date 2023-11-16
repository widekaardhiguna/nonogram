import { Difficulty, Stage } from "../stage-store.types"

export const isStageExist = (
  stages: Stage[],
  id: string,
  difficulty: Difficulty
) => {
  const arr = stages.filter(
    (stage) => stage.id === id && stage.difficulty === difficulty
  )

  return arr.length > 0
}
