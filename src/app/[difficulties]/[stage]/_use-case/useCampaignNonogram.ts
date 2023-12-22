import { NodeVariant, Button, Nonogram, NonogramView } from "@/components"
import { Fragment, useCallback, useEffect, useMemo, useState } from "react"
import stages from "@/assets/stages/stages.json"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"
import { cx } from "class-variance-authority"
import useStageStore from "@/stores/stage-store/useStageStore"

import usePersistStore from "@/hooks/usePersistStore"
import { selectStage } from "@/stores/stage-store/stage-store-selector/selectStage"
import Link from "next/link"
import { Difficulty } from "@/stores/stage-store/stage-store.types"

type UseCampaignNonogram = {
  difficulty: Difficulty
  stage: string
}

export type CurrentClearTime = {
  startAt: Date
  finishedAt: Date
}

const useCampaignNonogram = ({ difficulty, stage }: UseCampaignNonogram) => {
  const game = useMemo(() => {
    return stages[difficulty].find((games) => games.id === stage)
  }, [difficulty, stage])

  // Store
  const selectedStage = usePersistStore(useStageStore, (state) =>
    selectStage(state.stages, stage, difficulty)
  )
  const setStageFirstClear = useStageStore((state) => state.setStageFirstClear)
  const setStageFinish = useStageStore((state) => state.setStageFinish)
  const setStageClearDate = useStageStore((state) => state.setStageClearDate)
  const [currentClearTime, setCurrentClearTime] =
    useState<CurrentClearTime | null>(null)
  const [val, setVal] = useState(
    Nonogram.getInitialValue(game?.solution.length ?? 0)
  )
  const isCurrentStageFinished = Boolean(currentClearTime)

  const nonogram = useMemo(() => {
    return new Nonogram({
      type: "predefined",
      solution: (game?.solution as NodeVariant[][]) ?? [[]],
    })
  }, [game?.solution])

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  const onClear = () => {
    setVal(Nonogram.getInitialValue(game?.solution.length ?? 0))
  }

  const onFinished = useCallback(() => {
    const finishedAt = new Date()
    if (selectedStage?.startAt) {
      setCurrentClearTime({
        startAt: new Date(selectedStage.startAt),
        finishedAt: finishedAt,
      })
    }
    setStageFinish(stage, difficulty, finishedAt)
    setStageFirstClear(stage, difficulty)
    setStageClearDate(stage, difficulty)
  }, [
    selectedStage?.startAt,
    difficulty,
    stage,
    setStageFinish,
    setStageFirstClear,
    setStageClearDate,
  ])

  useEffect(() => {
    if (!game?.solution) return
    const clearedVal = Nonogram.clearMark(val)

    if (Nonogram.isEqual(clearedVal, game.solution as NodeVariant[][])) {
      onFinished()
    }
  }, [val, game?.solution, onFinished])

  const nextStage = () => {
    const totalStages = stages[difficulty]
    const currentStage = parseInt(stage)
    const next = `./${(currentStage + 1).toString()}`
    const home = "/"
    return currentStage >= totalStages.length ? home : next
  }

  return {
    currentClearTime,
    nonogram,
    val,
    onChangeNonogram,
    selectedStage,
    nextStage,
    onClear,
    isCurrentStageFinished,
  }
}

export default useCampaignNonogram
