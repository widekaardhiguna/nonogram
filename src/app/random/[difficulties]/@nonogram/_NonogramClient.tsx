"use client"

import { NonogramView } from "@/components"
import { Difficulty } from "@/stores/stage-store/stage-store.types"
import useRandomNonogram from "../_use-case/useRandomNonogram"
import useRandomNonogramEffect, {
  UseRandomNonogramEffect,
} from "../_use-case/useRandomNonogramEffect"

type NonogramClientProps = {
  difficulty: Difficulty
  nonogram: UseRandomNonogramEffect["nonogram"]
}

const NonogramClient = ({ difficulty, nonogram }: NonogramClientProps) => {
  useRandomNonogramEffect({
    nonogram,
  })

  const { game, val, onChangeNonogram, onFinished } = useRandomNonogram({
    difficulty,
  })

  if (!game)
    return (
      <div className="relative h-[500px] w-[500px] before:absolute before:w-full before:h-full before:bg-neutral-800 before:animate-pulse before:rounded-lg"></div>
    )

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
