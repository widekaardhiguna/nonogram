"use client"

import { Difficulty } from "@/stores/stage-store/stage-store.types"
import useStageList from "../_use-case/useStageList"
import { StageButton } from "../_components/StageButton"

export type DifficultiesPageProps = {
  params: {
    difficulties: Difficulty
  }
}

const StageListPage = ({ params }: DifficultiesPageProps) => {
  const { availableStages, isFinished } = useStageList({
    difficulty: params.difficulties,
  })

  return (
    <nav
      className={
        "grid grid-cols-3 mx-auto max-w-sm md:max-w-xl md:grid-cols-4 lg:max-w-2xl lg:gap-y-4"
      }
    >
      {availableStages?.map((stage) => {
        return (
          <div key={stage.id} className="flex place-content-center">
            <StageButton
              variant={isFinished(stage.id) ? "finished" : "unfinished"}
              href={`/${params.difficulties}/${stage.id}`}
            >
              {params.difficulties} {stage.id}
            </StageButton>
          </div>
        )
      })}
    </nav>
  )
}

export default StageListPage
