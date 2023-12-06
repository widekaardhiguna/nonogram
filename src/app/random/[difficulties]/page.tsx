"use client"

import FinishedTime from "@/app/[difficulties]/[stage]/_components/FinishedTime"
import HowToPlay from "@/app/[difficulties]/[stage]/_components/HowToPlay"
import StageGrid from "@/app/[difficulties]/[stage]/_components/StageGrid"
import Timer from "@/app/[difficulties]/[stage]/_components/Timer"
import clearUntick from "@/app/[difficulties]/[stage]/_helpers/clearUntick"
import generateDefaultValue from "@/app/[difficulties]/[stage]/_helpers/generateDefaultValue"
import generateRandomSolution from "@/app/[difficulties]/[stage]/_helpers/generateRandomSolution"
import generateRule from "@/app/[difficulties]/[stage]/_helpers/generateRule"
import { DifficultiesPageProps } from "@/app/[difficulties]/page"
import { Button, NodeVariant, Nonogram } from "@/components"
import isEqual from "@/helpers/isEqual"
import { IconSquareX, IconRefresh } from "@tabler/icons-react"

import { cx } from "class-variance-authority"
import { Fragment, useEffect, useState } from "react"

type Game = {
  solution: NodeVariant[][]
  rule: {
    x: number[][]
    y: number[][]
  }
}

type RandomGamePageProps = {
  params: DifficultiesPageProps["params"]
}

const difficultiesToLengthMap = {
  easy: 4,
  medium: 5,
  hard: 6,
}

const nonogramBalancer = 6

const RandomGamePage = ({ params }: RandomGamePageProps) => {
  const [game, setGame] = useState<null | Game>(null)
  const [val, setVal] = useState<NodeVariant[][]>([])
  const [currentClearTime, setCurrentClearTime] = useState<{
    startAt: Date
    finishedAt: Date | null
  }>({
    startAt: new Date(),
    finishedAt: null,
  })

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  const onFinished = () => {
    const finishedAt = new Date()
    setCurrentClearTime((prev) => ({
      ...prev,
      finishedAt: finishedAt,
    }))
  }

  const onClear = () => {
    if (game) setVal(generateDefaultValue(game.solution.length))
  }

  const onRestart = () => {
    const nonogramLength = difficultiesToLengthMap[params.difficulties]
    const solution = generateRandomSolution(nonogramLength, nonogramBalancer)
    const rule = generateRule(solution)
    setGame({
      solution,
      rule,
    })
    setVal(generateDefaultValue(solution.length))
    setCurrentClearTime({
      startAt: new Date(),
      finishedAt: null,
    })
  }

  // First Render
  useEffect(() => {
    onRestart()
  }, [])

  // Check finish condition
  useEffect(() => {
    if (!game) return
    const clearedVal = clearUntick(val)
    if (isEqual(clearedVal, game.solution)) {
      onFinished()
    }
  }, [val, game])

  return (
    <StageGrid
      top={
        <Fragment>
          {currentClearTime.finishedAt && (
            <FinishedTime
              startAt={currentClearTime.startAt}
              finishedAt={currentClearTime.finishedAt}
            />
          )}
          {!currentClearTime.finishedAt && (
            <Timer startAt={new Date(currentClearTime.startAt)} />
          )}
        </Fragment>
      }
      mid={
        <Fragment>
          {game && (
            <Nonogram
              rules={game.rule}
              value={val}
              onChange={onChangeNonogram}
            />
          )}
        </Fragment>
      }
      right={
        <Fragment>
          <HowToPlay />
          <div className={cx("flex gap-2 justify-end", "xl:justify-normal")}>
            {!currentClearTime.finishedAt && (
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
            <Button
              size="small"
              color={currentClearTime.finishedAt ? "primary" : "secondary"}
              variant="outlined"
              rightIcon={<IconRefresh />}
              onClick={onRestart}
            >
              Restart
            </Button>
          </div>
        </Fragment>
      }
    />
  )
}

export default RandomGamePage
