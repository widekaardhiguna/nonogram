"use client"

import { useRouter } from "next/navigation"
import { StagePageProps } from "./page"
import { PageSpinner } from "@/app/_components/PageSpinner/PageSpinner"
import useStageGuard from "./_use-case/useStageGuard"

type StageLayoutProps = StagePageProps & {
  children: React.ReactNode
}

export default function StageLayout({ children, params }: StageLayoutProps) {
  const { replace } = useRouter()

  const { currentStage, isHydrated, isOverStepping } = useStageGuard({
    difficulty: params.difficulties,
    stage: params.stage,
  })

  if (!isHydrated) return <PageSpinner />
  if (!currentStage || isOverStepping) {
    replace(".")
    return
  }

  return children
}
