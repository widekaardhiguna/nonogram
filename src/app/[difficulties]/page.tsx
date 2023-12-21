"use client"

import StageButton from "./_components/StageButton"
import { cx } from "class-variance-authority"
import game from "@/assets/stages/stages.json"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import usePersistStore from "@/hooks/usePersistStore"
import useStageStore from "@/stores/stage-store/useStageStore"
import { useMemo } from "react"
import { finishedStages } from "@/stores/stage-store/stage-store-selector/finishedStages"

export type DifficultiesPageProps = {
  params: {
    difficulties: Difficulty
  }
}

export default function DifficultiesPage({ params }: DifficultiesPageProps) {
  const stages = game[params.difficulties]

  const storedStages = usePersistStore(useStageStore, (state) => state.stages)
  const finishedStagesTotal = usePersistStore(
    useStageStore,
    (state) => finishedStages(state.stages, params.difficulties).length
  )

  const availableStages = useMemo(() => {
    if (typeof finishedStagesTotal !== "number") return null
    return stages.slice(0, finishedStagesTotal + 1)
  }, [stages, finishedStagesTotal])

  const isFinished = (id: string) => {
    const finishedStage = storedStages?.find(
      (stage) =>
        stage.id === id &&
        stage.difficulty === params.difficulties &&
        stage.firstClearTime !== null
    )
    return Boolean(finishedStage)
  }

  return (
    <main className="h-full pt-14">
      <div>
        <h1 className="font-semibold tracking-wider text-primary-400 text-3xl text-center mb-2">
          SELECT STAGE
        </h1>
        <p className="text-center text-white mb-10 text-md">
          {finishedStagesTotal} of {stages.length} stages completed.
        </p>
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
      </div>
    </main>
  )
}
