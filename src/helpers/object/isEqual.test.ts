import { describe, expect, it } from "vitest"
import isEqual from "./isEqual"

describe("object equality", () => {
  it("should return correct equality for simple object", () => {
    const obj1 = { name: "odek" }
    const obj2 = { name: "odek" }
    let subject = isEqual(obj1, obj2)
    let expected = true
    expect(subject).toBe(expected)

    const obj3 = { name: "bern" }
    subject = isEqual(obj1, obj3)
    expected = false
    expect(subject).toBe(expected)
  })
  it("should return correct equality for deep nested object", () => {
    const obj1 = { name: "odek", likes: ["apple", "mango", "orange"] }
    const obj2 = { name: "odek", likes: ["apple", "mango", "orange"] }
    let subject = isEqual(obj1, obj2)
    let expected = true
    expect(subject).toBe(expected)

    const obj3 = { name: "odek", likes: ["apple", "mango", "grape"] }
    subject = isEqual(obj1, obj3)
    expected = false
    expect(subject).toBe(expected)
  })
})
