"use client"

import { useRouter } from "next/navigation"
import { StagePageProps } from "./page"
import game from "@/assets/stages/stages.json"
import usePersistStore from "@/hooks/usePersistStore"
import useStageStore from "@/stores/stage-store/useStageStore"
import { finishedStages } from "@/stores/stage-store/stage-store-selector/finishedStages"
import { PageSpinner } from "@/app/_components/PageSpinner/PageSpinner"

type StageLayoutProps = StagePageProps & {
  children: React.ReactNode
}

export default function StageLayout({ children, params }: StageLayoutProps) {
  const { replace } = useRouter()

  const stage = game[params.difficulties].find(
    (stage) => stage.id === params.stage
  )

  const finishedStagesTotal = usePersistStore(
    useStageStore,
    (state) => finishedStages(state.stages, params.difficulties).length
  )

  if (typeof finishedStagesTotal !== "number") return <PageSpinner />

  const isOverStepping = parseInt(params.stage) > finishedStagesTotal + 1

  if (!stage || isOverStepping) {
    replace(".")
    return
  }

  return children
}
