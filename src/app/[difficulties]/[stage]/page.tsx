"use client"

import { Nonogram, NodeVariant, IconButton, Button } from "@/components"
import deepCopy from "@/helpers/deepCopy"
import Link from "next/link"
import { useEffect, useState } from "react"
import generateDefaultValue from "./_helpers/generateDefaultValue"
import stages from "@/assets/stages/stages.json"
import { DifficultiesPageProps } from "../page"
import { IconReload, IconChevronRight } from "@tabler/icons-react"

type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: "1"
  }
}

export default function StagePage({ params }: StagePageProps) {
  const game = stages[params.difficulties][params.stage]
  const [val, setVal] = useState(generateDefaultValue(game.solution.length))

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  useEffect(() => {
    let newVal = deepCopy(val)
    for (let i in newVal) {
      for (let j in newVal[i]) {
        if (newVal[i][j] === "x") {
          newVal[i][j] = "-"
        }
      }
    }

    const valString = newVal.toString()
    const solutionString = game.solution.toString()
    console.log(newVal)
    console.log(game.solution)
    if (valString === solutionString) {
      console.log("win")
    }
  }, [val])

  return (
    <main className="flex justify-center items-center h-full">
      <div>
        <div className="text-white text-center mb-10">Time passed: 00:04</div>
        <Nonogram rules={game.rule} value={val} onChange={onChangeNonogram} />
        <div className="flex flex-col items-end gap-1 mt-4">
          <Button className="px-0" color="secondary" rightIcon={<IconReload />}>
            Clear
          </Button>
          <Button
            className="px-0"
            color="primary"
            rightIcon={<IconChevronRight />}
          >
            Next Stage
          </Button>
        </div>
        <br />
      </div>
    </main>
  )
}
