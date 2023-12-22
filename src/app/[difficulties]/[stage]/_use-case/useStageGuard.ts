import game from "@/assets/stages/stages.json"
import usePersistStore from "@/hooks/usePersistStore"
import useStageStore from "@/stores/stage-store/useStageStore"
import { finishedStages } from "@/stores/stage-store/stage-store-selector/finishedStages"
import { Difficulty } from "@/stores/stage-store/stage-store.types"

type UseStageGuard = {
  difficulty: Difficulty
  stage: string
}

const useStageGuard = ({ difficulty, stage }: UseStageGuard) => {
  const currentStage = game[difficulty].find((item) => item.id === stage)

  const finishedStagesTotal = usePersistStore(
    useStageStore,
    (state) => finishedStages(state.stages, difficulty).length
  )

  const isHydrated = typeof finishedStagesTotal === "number"

  const isOverStepping = finishedStagesTotal
    ? parseInt(stage) > finishedStagesTotal + 1
    : null

  return {
    currentStage,
    isHydrated,
    isOverStepping,
  }
}

export default useStageGuard
