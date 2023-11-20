"use client"

import { Nonogram, NodeVariant, Button } from "@/components"
import { useEffect, useMemo, useState } from "react"
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

type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: "1"
  }
}

const randomSol = generateRandomSolution(5, 7)

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

  // Store
  const selectedStage = usePersistStore(useStageStore, (state) =>
    selectStage(state.stages, params.stage, params.difficulties)
  )

  const newStage = useStageStore((state) => state.newStage)
  const restartStage = useStageStore((state) => state.restartStage)
  const setStageFirstClear = useStageStore((state) => state.setStageFirstClear)
  const setStageFinish = useStageStore((state) => state.setStageFinish)
  const setStageClearDate = useStageStore((state) => state.setStageClearDate)

  // console.log(selectedStage)
  //

  const { duration, stopTimer } = useTimer({
    start: selectedStage?.startDate ? new Date(selectedStage.startDate) : null,
  })

  const game = stages[params.difficulties][params.stage]
  const [val, setVal] = useState(generateDefaultValue(game.solution.length))

  const rule = generateRule(game.solution)

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  const onClear = () => {
    setVal(generateDefaultValue(game.solution.length))
  }

  // const onRestart = () => {
  //   setIsFinished(false)
  //   onClear()
  // }

  const [isFinished, setIsFinished] = useState(false)

  const onFinished = () => {
    setStageFinish(params.stage, params.difficulties)
    setStageFirstClear(params.stage, params.difficulties)
    setStageClearDate(params.stage, params.difficulties)
    setIsFinished(true)
    stopTimer()
  }

  useEffect(() => {
    const clearedVal = clearUntick(val)

    if (isEqual(clearedVal, game.solution)) {
      onFinished()
    }
  }, [val])

  useEffect(() => {
    if (selectedStage) {
      if (!isFinished) {
        restartStage(params.stage, params.difficulties)
      }
    } else {
      newStage(params.stage, params.difficulties)
    }
  }, [selectedStage, isFinished])

  const nextStage = () => {
    // TO DO: Change JSON stages to array object
    const totalStages = stages[params.difficulties]
    const currentStage = parseInt(params.stage)
    return (currentStage + 1).toString()
  }

  return (
    <main className="grid items-center justify-center h-full w-full">
      <div>
        {isFinished ? (
          <FinishedTime duration={duration} />
        ) : (
          <Timer duration={duration} />
        )}
        <div
          className={cx(
            "grid grid-cols-[1fr] gap-y-5 gap-x-12",
            "xl:grid-cols-[1fr_auto_1fr]"
          )}
        >
          <div></div>
          <div>
            <Nonogram rules={rule} value={val} onChange={onChangeNonogram} />
          </div>
          <div>
            <HowToPlay />
            <FirstTimeClear duration={selectedStage?.firstClearTime} />
            <div className={cx("flex gap-2 justify-end", "xl:justify-normal")}>
              {isFinished ? (
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
                  <Link href={`./${nextStage()}`}>
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
          </div>
        </div>
      </div>
    </main>
  )
}
