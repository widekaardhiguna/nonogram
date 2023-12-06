"use client"

import { Nonogram, NodeVariant, Button } from "@/components"
import { Fragment, useEffect, useMemo, useState } from "react"
import generateDefaultValue from "./_helpers/generateDefaultValue"
import stages from "@/assets/stages/stages.json"
import { DifficultiesPageProps } from "../page"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"
import IconLeftClick from "@/assets/icons/IconLeftClick"
import IconRightClick from "@/assets/icons/IconRightClick"
import { cx } from "class-variance-authority"
import generateRule from "./_helpers/generateRule"
import clearUntick from "./_helpers/clearUntick"
import isEqual from "@/helpers/isEqual"
import generateRandomSolution from "./_helpers/generateRandomSolution"
import useStageStore from "@/stores/stage-store/useStageStore"

import Timer from "./_components/Timer"
import usePersistStore from "@/hooks/usePersistStore"
import { selectStage } from "@/stores/stage-store/stage-store-selector/selectStage"
import FirstTimeClear from "./_components/FirstTimeClear"
import useTimer from "@/hooks/useTimer"
import HowToPlay from "./_components/HowToPlay"
import Link from "next/link"
import FinishedTime from "./_components/FinishedTime"
import StageGrid from "./_components/StageGrid"

export type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: string
  }
}

const randomSol = generateRandomSolution(4, 6)

export default function StagePage({ params }: StagePageProps) {
  // console.log(generateRandomSolution(5, 7))

  // const { randomSol, rule } = useMemo(() => {
  //   const sol = generateRandomSolution(5, 6)
  //   const rl = generateRule(sol)

  //   return {
  //     randomSol: sol,
  //     rule: rl,
  //   }
  // }, [])
  // const randomSol = generateRandomSolution(5, 7)
  // console.log(game.solution)

  const game = stages[params.difficulties].find(
    (games) => games.id === params.stage
  )

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

  // console.log(selectedStage)
  //

  // const { duration, stopTimer } = useTimer({
  //   start: selectedStage?.startAt ? new Date(selectedStage.startAt) : null,
  // })

  const [val, setVal] = useState(
    generateDefaultValue(game?.solution.length ?? 0)
  )

  const rule = generateRule(game?.solution ?? [[]])

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  const onClear = () => {
    setVal(generateDefaultValue(game?.solution.length ?? 0))
  }

  // const onRestart = () => {
  //   setIsFinished(false)
  //   onClear()
  // }

  // const [isFinished, setIsFinished] = useState(false)

  const onFinished = () => {
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

    // setIsFinished(true)
    // stopTimer()
  }

  useEffect(() => {
    const clearedVal = clearUntick(val)

    if (isEqual(clearedVal, game?.solution ?? {})) {
      onFinished()
    }
  }, [val])

  useEffect(() => {
    if (selectedStage) {
      if (!currentClearTime) {
        restartStage(params.stage, params.difficulties)
      }
    } else {
      newStage(params.stage, params.difficulties)
    }
  }, [selectedStage, currentClearTime])

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
      mid={<Nonogram rules={rule} value={val} onChange={onChangeNonogram} />}
      right={
        <Fragment>
          <HowToPlay />
          <FirstTimeClear duration={selectedStage?.firstClearTime} />
          <div className={cx("flex gap-2 justify-end", "xl:justify-normal")}>
            {currentClearTime ? (
              <>
                {/* <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    rightIcon={<IconSquareX />}
                    onClick={onRestart}
                  >
                    Restart
                  </Button> */}
                <Link href={nextStage()}>
                  <Button
                    size="small"
                    color="primary"
                    rightIcon={<IconChevronRight />}
                  >
                    Next Stage
                  </Button>
                </Link>
              </>
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
