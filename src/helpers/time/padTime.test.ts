import { describe, expect, it } from "vitest"
import padTime from "./padTime"

describe("pad time", () => {
  it("should return correct pad time", () => {
    let subject = padTime(0)
    let expected = "00"
    expect(subject).toBe(expected)

    subject = padTime(4)
    expected = "04"
    expect(subject).toBe(expected)

    subject = padTime(24)
    expected = "24"
    expect(subject).toBe(expected)

    subject = padTime(183)
    expected = "183"
    expect(subject).toBe(expected)
  })
})
