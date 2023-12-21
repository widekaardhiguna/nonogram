import { NodeVariant, Nonogram } from "@/components"

import { useCallback } from "react"
import useRandomStageStore from "@/stores/random-stage-store/useRandomStageStore"

import { useRouter } from "next/navigation"

const useRandomNonogram = () => {
  const { refresh } = useRouter()

  const game = useRandomStageStore((state) => state.game)
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
    refresh()
  }, [refresh])

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
