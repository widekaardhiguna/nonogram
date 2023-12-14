import { describe, expect, expectTypeOf, it } from "vitest"
import { Nonogram } from "./Nonogram"
import { NodeVariant } from "@/components"

const solution1: NodeVariant[][] = [
  ["-", "o", "o", "o"],
  ["o", "-", "o", "o"],
  ["-", "o", "-", "o"],
  ["o", "o", "o", "-"],
]

const solution1WithMark: NodeVariant[][] = [
  ["-", "o", "o", "o"],
  ["o", "x", "o", "o"],
  ["-", "o", "x", "o"],
  ["o", "o", "o", "-"],
]

const rule1 = {
  x: [[1, 1], [1, 2], [2, 1], [3]],
  y: [[3], [1, 2], [1, 1], [3]],
}

const solution2: NodeVariant[][] = [
  ["o", "o", "-", "-"],
  ["-", "-", "-", "o"],
  ["-", "-", "-", "-"],
  ["o", "-", "o", "o"],
]

const initialValue: NodeVariant[][] = [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
]

describe("static nonogram", () => {
  it("should clear mark of a solution", () => {
    const subject = Nonogram.clearMark(solution1WithMark)
    const expected = solution1
    expect(subject).toStrictEqual(expected)
  })

  it("should return correct rule", () => {
    const subject = Nonogram.generateRule(solution1)
    const expected = rule1
    expect(subject).toStrictEqual(expected)
  })

  it("should return correct initial value", () => {
    const subject = Nonogram.getInitialValue(4)
    const expected = initialValue
    expect(subject).toStrictEqual(expected)
  })

  it("should return correct equality", () => {
    let subject = Nonogram.isEqual(solution1, solution2)
    let expected = false
    expect(subject).toBe(expected)

    const clearedSolution1 = Nonogram.clearMark(solution1WithMark)
    subject = Nonogram.isEqual(solution1, clearedSolution1)
    expected = true
    expect(subject).toBe(expected)
  })
})

describe("predefined nonogram", () => {
  const nonogram = new Nonogram({
    type: "predefined",
    solution: solution1,
  })

  it("should has correct length.", () => {
    const test = nonogram.length
    const expected = 4
    expect(test).toBe(expected)
  })

  it("should has correct rule.", () => {
    const test = nonogram.rule
    const expected = rule1
    expect(test).toStrictEqual(expected)
  })
})

describe("random nonogram", () => {
  const nonogram = new Nonogram({
    type: "random",
    length: 5,
  })

  it("should has correct a solution", () => {
    const subject = nonogram.solution
    type expected = NodeVariant[][]
    expectTypeOf(subject).toEqualTypeOf<expected>()
  })
})
