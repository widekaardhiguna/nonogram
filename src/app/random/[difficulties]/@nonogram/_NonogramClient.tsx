"use client"

import { NonogramView } from "@/components"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import useRandomNonogram from "../_use-case/useRandomNonogram"
import useSyncStates, { UseSyncStates } from "../_use-case/useSyncStates"
import LoadingNonogram from "../@nonogram/loading"

type NonogramClientProps = {
  nonogram: UseSyncStates["nonogram"]
}

const NonogramClient = ({ nonogram }: NonogramClientProps) => {
  useSyncStates({
    nonogram,
  })

  const { game, val, onChangeNonogram, onFinished } = useRandomNonogram()

  if (!game) {
    return <LoadingNonogram />
  }

  return (
    <NonogramView
      rules={game.rule}
      value={val}
      onChange={(val) => {
        onChangeNonogram(val)
        onFinished(val)
      }}
    />
  )
}

export default NonogramClient
