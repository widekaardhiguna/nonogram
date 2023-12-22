"use client"

import { Difficulty } from "@/stores/stage-store/stage-store.types"
import useStageList from "../_use-case/useStageList"

export type DifficultiesPageProps = {
  params: {
    difficulties: Difficulty
  }
}

const StagesCounterPage = ({ params }: DifficultiesPageProps) => {
  const { totalFinishedStages, totalStage } = useStageList({
    difficulty: params.difficulties,
  })

  return (
    <p className="text-center text-white text-md">
      {totalFinishedStages} of {totalStage} stages completed.
    </p>
  )
}

export default StagesCounterPage
