import { useEffect, useRef } from "react"
import useRandomStageStore from "@/stores/random-stage-store/useRandomStageStore"
import { Rule, NodeVariant, Nonogram } from "@/components/Nonogram"

export type UseSyncStates = {
  nonogram: {
    length: number
    solution: NodeVariant[][]
    rule: Rule
  }
}

const useSyncStates = ({ nonogram }: UseSyncStates) => {
  const setGame = useRandomStageStore((state) => state.setGame)
  const setVal = useRandomStageStore((state) => state.setVal)
  const setCurrentClearTime = useRandomStageStore(
    (state) => state.setCurrentClearTime
  )

  useEffect(() => {
    setGame({
      solution: nonogram.solution,
      rule: nonogram.rule,
    })
    setVal(Nonogram.getInitialValue(nonogram.length))
    setCurrentClearTime({
      startAt: new Date(),
      finishedAt: null,
    })
  }, [nonogram, setGame, setVal, setCurrentClearTime])
}

export default useSyncStates
