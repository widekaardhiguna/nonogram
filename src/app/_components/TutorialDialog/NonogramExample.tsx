"use client"

import { Nonogram } from "@/components"

const rules = {
  x: [[2], [], [1, 1], [4]],
  y: [[2], [1], [1, 2], [1, 1]],
}

const Nonogram1 = () => {
  return (
    <Nonogram
      rules={rules}
      value={[
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
      ]}
    />
  )
}

const Nonogram2 = () => {
  return (
    <Nonogram
      rules={rules}
      value={[
        ["-", "-", "-", "o"],
        ["-", "-", "-", "o"],
        ["-", "-", "-", "o"],
        ["-", "-", "-", "o"],
      ]}
    />
  )
}

const Nonogram3 = () => {
  return (
    <Nonogram
      rules={rules}
      value={[
        ["-", "-", "-", "o"],
        ["-", "-", "-", "o"],
        ["o", "-", "o", "o"],
        ["-", "-", "-", "o"],
      ]}
    />
  )
}

const Nonogram4 = () => {
  return (
    <Nonogram
      rules={rules}
      value={[
        ["-", "-", "o", "o"],
        ["-", "-", "-", "o"],
        ["o", "-", "o", "o"],
        ["o", "-", "-", "o"],
      ]}
    />
  )
}

export const NonogramExample = {
  First: Nonogram1,
  Second: Nonogram2,
  Third: Nonogram3,
  Fourth: Nonogram4,
}
