import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { IconButton } from "."

describe("Button", () => {
  it("should render children correctly", () => {
    render(<IconButton>children</IconButton>)
    expect(screen.getByText(/children/i)).toBeVisible()
  })
  it("should has event listener correctly", () => {
    const fn = vi.fn()
    render(<IconButton onClick={fn}>click me</IconButton>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(fn).toBeCalledTimes(1)
  })
})
