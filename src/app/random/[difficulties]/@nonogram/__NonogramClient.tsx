"use client"

import { Nonogram, NonogramView } from "@/components"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import useRandomNonogram, {
  UseRandomNonogram,
} from "../_use-case/useRandomNonogram"
import useRandomNonogramEffect, {
  UseRandomNonogramEffect,
} from "../_use-case/useRandomNonogramEffect"

type NonogramClientProps = {
  difficulty: Difficulty
  nonogram: UseRandomNonogramEffect["nonogram"]
}

const NonogramClient = ({ difficulty, nonogram }: NonogramClientProps) => {
  const { game, val, onChangeNonogram } = useRandomNonogram({
    difficulty,
  })

  useRandomNonogramEffect({
    nonogram: nonogram,
  })

  if (!game) return <>AAAA ...</>

  return (
    <NonogramView rules={game.rule} value={val} onChange={onChangeNonogram} />
  )
}

export default NonogramClient
