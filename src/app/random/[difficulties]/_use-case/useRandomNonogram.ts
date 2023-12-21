import { DifficultiesPageProps } from "@/app/[difficulties]/page"
import { Button, NodeVariant, Nonogram, NonogramView } from "@/components"

import { useCallback, useEffect, useState } from "react"
import useRandomStageStore from "../_stores/useRandomStageStore"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import { Game } from "../_stores/random-stage-store.types"
import { Rule } from "@/components/Nonogram"
import { useRouter } from "next/navigation"

const difficultiesToLengthMap = {
  easy: 4,
  medium: 5,
  hard: 6,
}

const nonogramBalancer = 6

export type UseRandomNonogram = {
  difficulty: Difficulty
}

const useRandomNonogram = ({ difficulty }: UseRandomNonogram) => {
  const { refresh } = useRouter()

  const game = useRandomStageStore((state) => state.game)
  const setGame = useRandomStageStore((state) => state.setGame)
  const val = useRandomStageStore((state) => state.val)
  const setVal = useRandomStageStore((state) => state.setVal)
  const currentClearTime = useRandomStageStore(
    (state) => state.currentClearTime
  )
  const setCurrentClearTime = useRandomStageStore(
    (state) => state.setCurrentClearTime
  )

  const onFinished = (value: NodeVariant[][]) => {
    if (!game) return
    const clearedVal = Nonogram.clearMark(value)
    if (Nonogram.isEqual(clearedVal, game.solution)) {
      const finishedAt = new Date()
      setCurrentClearTime({
        ...currentClearTime,
        finishedAt: finishedAt,
      })
    }
  }

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  const onClear = () => {
    if (game) {
      setVal(Nonogram.getInitialValue(game.solution.length))
    }
  }

  const onRestart = useCallback(() => {
    const nonogramLength = difficultiesToLengthMap[difficulty]

    const nonogram = new Nonogram({
      type: "random",
      length: nonogramLength,
      balancer: nonogramBalancer,
    })

    setGame({
      solution: nonogram.solution,
      rule: nonogram.rule,
    })
    setVal(Nonogram.getInitialValue(nonogramLength))
    setCurrentClearTime({
      startAt: new Date(),
      finishedAt: null,
    })
  }, [setGame, setVal, setCurrentClearTime, difficulty])

  return {
    game,
    val,
    onChangeNonogram,
    currentClearTime,
    onClear,
    onRestart,
    onFinished,
  }
}

export default useRandomNonogram
