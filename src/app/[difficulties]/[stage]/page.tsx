"use client"

import { NodeVariant, Button, Nonogram, NonogramView } from "@/components"
import { Fragment, useCallback, useEffect, useMemo, useState } from "react"
import stages from "@/assets/stages/stages.json"
import { DifficultiesPageProps } from "../page"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"
import { cx } from "class-variance-authority"
import useStageStore from "@/stores/stage-store/useStageStore"

import Timer from "./_components/Timer"
import usePersistStore from "@/hooks/usePersistStore"
import { selectStage } from "@/stores/stage-store/stage-store-selector/selectStage"
import FirstTimeClear from "./_components/FirstTimeClear"
import HowToPlay from "./_components/HowToPlay"
import Link from "next/link"
import FinishedTime from "./_components/FinishedTime"
import StageGrid from "./_components/StageGrid"

export type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: string
  }
}

export default function StagePage({ params }: StagePageProps) {
  const game = useMemo(() => {
    return stages[params.difficulties].find(
      (games) => games.id === params.stage
    )
  }, [params.difficulties, params.stage])

  // Store
  const selectedStage = usePersistStore(useStageStore, (state) =>
    selectStage(state.stages, params.stage, params.difficulties)
  )

  const newStage = useStageStore((state) => state.newStage)
  const restartStage = useStageStore((state) => state.restartStage)
  const setStageFirstClear = useStageStore((state) => state.setStageFirstClear)
  const setStageFinish = useStageStore((state) => state.setStageFinish)
  const setStageClearDate = useStageStore((state) => state.setStageClearDate)

  const [currentClearTime, setCurrentClearTime] = useState<null | {
    startAt: Date
    finishedAt: Date
  }>(null)

  const [val, setVal] = useState(
    Nonogram.getInitialValue(game?.solution.length ?? 0)
  )

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
    setStageFinish(params.stage, params.difficulties, finishedAt)
    setStageFirstClear(params.stage, params.difficulties)
    setStageClearDate(params.stage, params.difficulties)
  }, [
    selectedStage?.startAt,
    params.difficulties,
    params.stage,
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

  useEffect(() => {
    if (selectedStage) {
      if (!currentClearTime) {
        restartStage(params.stage, params.difficulties)
      }
    } else {
      newStage(params.stage, params.difficulties)
    }
  }, [
    selectedStage,
    currentClearTime,
    newStage,
    restartStage,
    params.difficulties,
    params.stage,
  ])

  const nextStage = () => {
    const totalStages = stages[params.difficulties]
    const currentStage = parseInt(params.stage)
    const next = `./${(currentStage + 1).toString()}`
    const home = "/"
    return currentStage >= totalStages.length ? home : next
  }

  return (
    <StageGrid
      top={
        <Fragment>
          {currentClearTime && (
            <FinishedTime
              startAt={currentClearTime.startAt}
              finishedAt={currentClearTime.finishedAt}
            />
          )}
          {!currentClearTime && selectedStage?.startAt && (
            <Timer startAt={new Date(selectedStage.startAt)} />
          )}
        </Fragment>
      }
      mid={
        <NonogramView
          rules={nonogram.rule}
          value={val}
          onChange={onChangeNonogram}
        />
      }
      right={
        <Fragment>
          <HowToPlay />
          <FirstTimeClear duration={selectedStage?.firstClearTime} />
          <div className={cx("flex gap-2 justify-end", "xl:justify-normal")}>
            {currentClearTime ? (
              <Link href={nextStage()}>
                <Button
                  size="small"
                  color="primary"
                  rightIcon={<IconChevronRight />}
                >
                  Next Stage
                </Button>
              </Link>
            ) : (
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                rightIcon={<IconSquareX />}
                onClick={onClear}
              >
                Clear
              </Button>
            )}
          </div>
        </Fragment>
      }
    />
  )
}
