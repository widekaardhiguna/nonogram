import { describe, expect, it } from "vitest"
import getClearTime from "./getClearTime"

describe("clear time", () => {
  it("should correctly converts duration to clear time with format similar to HH:mm:ss.", () => {
    const subject = getClearTime({
      years: 1,
      days: 2,
      hours: 3,
      weeks: 2,
      months: 1,
      minutes: 24,
      seconds: 47,
    })
    const expected = "9883:24:47"
    expect(subject).toBe(expected)
  })
})
