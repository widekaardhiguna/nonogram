"use client"

import { Nonogram, NodeVariant } from "@/components"
import deepCopy from "@/helpers/deepCopy"
import Link from "next/link"
import { useEffect, useState } from "react"
import generateDefaultValue from "./_helpers/generateDefaultValue"

const arr = {
  x: [[3], [2], [2], [2, 2], [1, 1]],
  y: [[2], [1], [2], [4], [1, 3]],
}

const solution: NodeVariant[][] = [
  ["empty", "empty", "empty", "tick", "tick"],
  ["empty", "empty", "empty", "tick", "empty"],
  ["tick", "tick", "empty", "empty", "empty"],
  ["tick", "tick", "tick", "tick", "empty"],
  ["tick", "empty", "tick", "tick", "tick"],
]

const defaultValue = generateDefaultValue(arr.x.length)

type PageProps = {
  params: {}
}

export default function Page({ params }: PageProps) {
  const [val, setVal] = useState(defaultValue)

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  useEffect(() => {
    let newVal = deepCopy(val)
    for (let i in newVal) {
      for (let j in newVal[i]) {
        if (newVal[i][j] === "untick") {
          newVal[i][j] = "empty"
        }
      }
    }

    const valString = newVal.toString()
    const solutionString = solution.toString()
    console.log(newVal)
    console.log(solution)
    if (valString === solutionString) {
      console.log("win")
    }
  }, [val])

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <Nonogram rules={arr} value={val} onChange={onChangeNonogram} />
      </div>
    </main>
  )
}
