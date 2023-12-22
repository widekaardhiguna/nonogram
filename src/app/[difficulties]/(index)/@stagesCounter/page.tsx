"use client"

import { DifficultiesPageProps } from "../_types/difficulty.type"
import useStageList from "../_use-case/useStageList"

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
