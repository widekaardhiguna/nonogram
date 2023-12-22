"use client"

import { NodeVariant, NonogramView } from "@/components"
import useRandomNonogram from "../_use-case/useRandomNonogram"
import useSyncStates, { UseSyncStates } from "../_use-case/useSyncStates"

type NonogramClientProps = UseSyncStates & {
  initialValue: NodeVariant[][]
}

const NonogramClient = ({
  initialValue,
  length,
  rule,
  solution,
}: NonogramClientProps) => {
  useSyncStates({
    length,
    rule,
    solution,
  })

  const { game, val, onChangeNonogram, onFinished } = useRandomNonogram()

  return (
    <NonogramView
      rules={game?.rule ?? rule}
      value={val ?? initialValue}
      onChange={(val) => {
        onChangeNonogram(val)
        onFinished(val)
      }}
    />
  )
}

export default NonogramClient
