import { useEffect } from "react"

import useStageStore from "@/stores/stage-store/useStageStore"
import usePersistStore from "@/hooks/usePersistStore"
import { selectStage } from "@/stores/stage-store/stage-store-selector/selectStage"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import { CurrentClearTime } from "./useCampaignNonogram"

type UseInitStage = {
  difficulty: Difficulty
  stage: string
  currentClearTime: CurrentClearTime | null
}

/**
 * if this is the first time user open a stage, it will create
 * a new stage. Otherwhise it will just clear the solution / val nonogram.
 */
const useInitStage = ({
  difficulty,
  stage,
  currentClearTime,
}: UseInitStage) => {
  const selectedStage = usePersistStore(useStageStore, (state) =>
    selectStage(state.stages, stage, difficulty)
  )

  const newStage = useStageStore((state) => state.newStage)
  const restartStage = useStageStore((state) => state.restartStage)

  useEffect(() => {
    if (selectedStage) {
      if (!currentClearTime) {
        restartStage(stage, difficulty)
      }
    } else {
      newStage(stage, difficulty)
    }
  }, [
    selectedStage,
    currentClearTime,
    newStage,
    restartStage,
    difficulty,
    stage,
  ])
}

export default useInitStage
