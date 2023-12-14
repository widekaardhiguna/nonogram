"use client"

import { NonogramView } from "@/components"

const rules = {
  x: [[2], [], [1, 1], [4]],
  y: [[2], [1], [1, 2], [1, 1]],
}

const NonogramView1 = () => {
  return (
    <NonogramView
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

const NonogramView2 = () => {
  return (
    <NonogramView
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

const NonogramView3 = () => {
  return (
    <NonogramView
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

const NonogramView4 = () => {
  return (
    <NonogramView
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
  First: NonogramView1,
  Second: NonogramView2,
  Third: NonogramView3,
  Fourth: NonogramView4,
}
