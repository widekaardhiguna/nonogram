"use client"

import { Nonogram, NodeVariant, Button } from "@/components"
import { useEffect, useMemo, useState } from "react"
import generateDefaultValue from "./_helpers/generateDefaultValue"
import stages from "@/assets/stages/stages.json"
import { DifficultiesPageProps } from "../page"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"
import IconLeftClick from "@/assets/icons/IconLeftClick"
import IconRightClick from "@/assets/icons/IconRightClick"
import { cx } from "class-variance-authority"
import generateRule from "./_helpers/generateRule"
import clearUntick from "./_helpers/clearUntick"
import isEqual from "@/helpers/isEqual"
import generateRandomSolution from "./_helpers/generateRandomSolution"

type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: "1"
  }
}

const randomSol = generateRandomSolution(5, 7)

export default function StagePage({ params }: StagePageProps) {
  // console.log(generateRandomSolution(5, 7))

  // const { randomSol, rule } = useMemo(() => {
  //   const sol = generateRandomSolution(5, 6)
  //   const rl = generateRule(sol)

  //   return {
  //     randomSol: sol,
  //     rule: rl,
  //   }
  // }, [])
  // const randomSol = generateRandomSolution(5, 7)
  // console.log(game.solution)

  const game = stages[params.difficulties][params.stage]
  const [val, setVal] = useState(generateDefaultValue(game.solution.length))

  const rule = generateRule(game.solution)

  const onChangeNonogram = (value: NodeVariant[][]) => {
    setVal(value)
  }

  useEffect(() => {
    const clearedVal = clearUntick(val)

    if (isEqual(clearedVal, game.solution)) {
      console.log("win")
    }
  }, [val])

  return (
    <main className="grid items-center justify-center h-full w-full">
      <div>
        <div className={cx("text-white text-center", "xl:mb-6")}>
          Time passed: 00:04
        </div>
        <div
          className={cx(
            "grid grid-cols-[1fr] gap-y-5 gap-x-12",
            "xl:grid-cols-[1fr_auto_1fr]"
          )}
        >
          <div></div>
          <div>
            <Nonogram rules={rule} value={val} onChange={onChangeNonogram} />
          </div>
          <div>
            <div className={cx("hidden mb-4", "xl:block")}>
              <div className={hintClass}>
                <IconLeftClick height="1.2rem" width="1.2rem" />
                <p>Left click: to fill the square</p>
              </div>
              <div className={hintClass}>
                <IconRightClick height="1.2rem" width="1.2rem" />
                <p>
                  Right click: to mark the square with
                  <span className="text-red-600"> X</span>
                </p>
              </div>
            </div>
            <p className="text-white mb-6">Your first clear time: --:--</p>
            <div className={cx("flex gap-2 justify-end", "xl:justify-normal")}>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                rightIcon={<IconSquareX />}
              >
                Clear
              </Button>
              <Button
                size="small"
                color="primary"
                rightIcon={<IconChevronRight />}
              >
                Next Stage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const hintClass = cx("flex gap-1 items-center text-md text-secondary-200 mb-2")
