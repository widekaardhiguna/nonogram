import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Button } from "."

describe("Button", () => {
  it("should render children correctly", () => {
    render(<Button>children</Button>)
    expect(screen.getByText(/children/i)).toBeVisible()
  })

  it("should render left icon correctly", () => {
    render(<Button leftIcon={"leftIcon"}>children</Button>)
    expect(screen.getByText(/leftIcon/i)).toBeVisible()
  })

  it("should render right icon correctly", () => {
    render(<Button leftIcon={"rightIcon"}>children</Button>)
    expect(screen.getByText(/rightIcon/i)).toBeVisible()
  })

  it("should has event listener correctly", () => {
    const fn = vi.fn()
    render(<Button onClick={fn}>click me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(fn).toBeCalledTimes(1)
  })
})
