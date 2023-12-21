import { DifficultiesPageProps } from "@/app/[difficulties]/page"
import { Nonogram } from "@/components/Nonogram"
import NonogramClient from "./_NonogramClient"
import useRandomNonogram from "../_use-case/useRandomNonogram"
import useRandomStageStore from "../_stores/useRandomStageStore"

type RandomGamePageProps = {
  params: DifficultiesPageProps["params"]
}

const difficultiesToLengthMap = {
  easy: 4,
  medium: 5,
  hard: 6,
}

const nonogramBalancer = 6

const NonogramPage = ({ params }: RandomGamePageProps) => {
  const nonogramLength = difficultiesToLengthMap[params.difficulties]

  const nonogram = new Nonogram({
    type: "random",
    length: nonogramLength,
    balancer: nonogramBalancer,
  })

  return (
    <NonogramClient
      difficulty={params.difficulties}
      nonogram={{
        length: nonogram.length,
        rule: nonogram.rule,
        solution: nonogram.solution,
      }}
    />
  )
}

export default NonogramPage
