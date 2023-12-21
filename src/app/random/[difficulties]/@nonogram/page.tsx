"use client"

import { NonogramView } from "@/components"
import useRandomNonogram from "../_use-case/useRandomNonogram"
import { DifficultiesPageProps } from "@/app/[difficulties]/page"

type RandomGamePageProps = {
  params: DifficultiesPageProps["params"]
}

const NonogramPage = ({ params }: RandomGamePageProps) => {
  const { game, val, onChangeNonogram } = useRandomNonogram({
    difficulty: params.difficulties,
  })

  if (!game) return <>Loading Nonogram ...</>

  return (
    <NonogramView rules={game.rule} value={val} onChange={onChangeNonogram} />
  )
}

export default NonogramPage
