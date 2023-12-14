"use client"

import { NonogramView } from "@/components"

const NonogramViewShowcase = () => {
  return (
    <NonogramView
      rules={{
        x: [[2, 1], [1], [1, 1], [2, 1]],
        y: [[2, 1], [1, 2], [], [1, 2]],
      }}
      value={[
        ["o", "o", "-", "o"],
        ["o", "-", "o", "o"],
        ["-", "-", "-", "-"],
        ["o", "-", "o", "o"],
      ]}
    />
  )
}

export default NonogramViewShowcase
