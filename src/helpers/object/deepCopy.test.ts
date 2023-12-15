import { describe, expect, it } from "vitest"
import deepCopy from "./deepCopy"

describe("deep copy", () => {
  it("should copy simple object", () => {
    const expected = {}
    const subject = deepCopy(expected)
    expect(subject).not.toBe(expected)
  })
  it("should copy deep nested object", () => {
    const expected = { arr: [] }
    const subject = deepCopy(expected)
    expect(subject.arr).not.toBe(expected.arr)
  })
})
