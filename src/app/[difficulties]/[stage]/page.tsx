"use client"

import { Nonogram, NodeVariant, Button } from "@/components"
import deepCopy from "@/helpers/deepCopy"
import { useEffect, useState } from "react"
import generateDefaultValue from "./_helpers/generateDefaultValue"
import stages from "@/assets/stages/stages.json"
import { DifficultiesPageProps } from "../page"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"
import IconLeftClick from "@/assets/icons/IconLeftClick"
import IconRightClick from "@/assets/icons/IconRightClick"
import { cx } from "class-variance-authority"

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
    <main className="grid items-center justify-center h-full w-full">
      <div>
        <div className={cx("text-white text-center", "xl:mb-6")}>
          Time passed: 00:04
        </div>
        <div
          className={cx(
            "grid grid-cols-[1fr] gap-y-5 gap-x-8",
            "xl:grid-cols-[1fr_auto_1fr]"
          )}
        >
          <div></div>
          <div>
            <Nonogram
              rules={game.rule}
              value={val}
              onChange={onChangeNonogram}
            />
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
