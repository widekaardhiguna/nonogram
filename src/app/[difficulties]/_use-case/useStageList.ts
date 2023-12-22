import game from "@/assets/stages/stages.json"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import usePersistStore from "@/hooks/usePersistStore"
import useStageStore from "@/stores/stage-store/useStageStore"
import { useMemo } from "react"
import { finishedStages } from "@/stores/stage-store/stage-store-selector/finishedStages"

type UseStageList = {
  difficulty: Difficulty
}

const useStageList = ({ difficulty }: UseStageList) => {
  const stages = game[difficulty]

  const storedStages = usePersistStore(useStageStore, (state) => state.stages)
  const totalFinishedStages = usePersistStore(
    useStageStore,
    (state) => finishedStages(state.stages, difficulty).length
  )

  const availableStages = useMemo(() => {
    if (typeof totalFinishedStages !== "number") return null
    return stages.slice(0, totalFinishedStages + 1)
  }, [stages, totalFinishedStages])

  const totalStage = stages.length

  const isFinished = (id: string) => {
    const finishedStage = storedStages?.find(
      (stage) =>
        stage.id === id &&
        stage.difficulty === difficulty &&
        stage.firstClearTime !== null
    )
    return Boolean(finishedStage)
  }

  return {
    isFinished,
    availableStages,
    totalStage,
    totalFinishedStages,
  }
}

export default useStageList
