import { useEffect } from "react"
import useRandomStageStore from "@/stores/random-stage-store/useRandomStageStore"
import { Rule, NodeVariant, Nonogram } from "@/components/Nonogram"

export type UseSyncStates = {
  length: number
  solution: NodeVariant[][]
  rule: Rule
}

const useSyncStates = ({ length, rule, solution }: UseSyncStates) => {
  const setGame = useRandomStageStore((state) => state.setGame)
  const setVal = useRandomStageStore((state) => state.setVal)
  const setCurrentClearTime = useRandomStageStore(
    (state) => state.setCurrentClearTime
  )

  useEffect(() => {
    setGame({
      solution: solution,
      rule: rule,
    })
    setVal(Nonogram.getInitialValue(length))
    setCurrentClearTime({
      startAt: new Date(),
      finishedAt: null,
    })
  }, [length, rule, solution, setGame, setVal, setCurrentClearTime])
}

export default useSyncStates
