"use client"

import { Nonogram } from "@/components"

const NonogramShowcase = () => {
  return (
    <Nonogram
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

export default NonogramShowcase
