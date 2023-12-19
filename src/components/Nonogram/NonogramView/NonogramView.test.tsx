import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { NonogramView } from "./NonogramView"
import { NodeVariant } from ".."
import { getBtnTestId } from "./Node"

const solution: NodeVariant[][] = [
  ["-", "o", "o"],
  ["o", "x", "o"],
  ["-", "o", "x"],
]

const rule = {
  x: [
    [1, 1],
    [1, 2],
    [2, 1],
  ],
  y: [[3], [1, 2], [1, 1]],
}

describe("NonogramView should render correct element based on the given value.", () => {
  it("should render node correctly based on given solution.", () => {
    render(<NonogramView rules={rule} value={solution} />)

    const tickClass = "bg-primary-500"
    const emptyClass = "bg-transparent"
    const untickClass = "text-red-600"

    const expectedClasses = [
      [emptyClass, tickClass, emptyClass],
      [tickClass, untickClass, tickClass],
      [tickClass, tickClass, untickClass],
    ]

    expectedClasses.forEach((row, rowIndex) => {
      row.forEach((expectedClass, colIndex) => {
        const subject = screen.getByTestId(
          getBtnTestId(rowIndex, colIndex)
        ).firstChild
        expect(subject).toHaveClass(expectedClass)
      })
    })
  })

  it("should render hint correctly based on given rule.", () => {
    render(<NonogramView rules={rule} value={solution} />)

    const expectedRule = {
      x: [/11/i, /12/i, /21/i],
      y: [/3/i, /12/i, /11/i],
    }

    expectedRule.x.forEach((col, index) => {
      const subject = screen.getByTestId(`hint-column-${index}`)
      expect(subject).toHaveTextContent(col)
    })

    expectedRule.y.forEach((row, index) => {
      const subject = screen.getByTestId(`hint-row-${index}`)
      expect(subject).toHaveTextContent(row)
    })
  })

  it("should have correct value of onChange callback.", () => {
    const onChange = (val: NodeVariant[][]) => val
    const fn = vi.fn(onChange)

    render(<NonogramView rules={rule} value={solution} onChange={fn} />)

    // x,y=0,0
    let subject = screen.getByTestId(getBtnTestId(0, 0))
    fireEvent.click(subject)
    expect(fn.mock.calls[0][0]).toStrictEqual([
      ["o", "o", "o"],
      ["o", "x", "o"],
      ["-", "o", "x"],
    ])
    fireEvent.contextMenu(subject)
    expect(fn.mock.calls[1][0]).toStrictEqual([
      ["x", "o", "o"],
      ["o", "x", "o"],
      ["-", "o", "x"],
    ])

    // x,y = 1,1
    subject = screen.getByTestId(getBtnTestId(1, 1))
    fireEvent.click(subject)
    expect(fn.mock.calls[2][0]).toStrictEqual([
      ["-", "o", "o"],
      ["o", "o", "o"],
      ["-", "o", "x"],
    ])
    fireEvent.contextMenu(subject)
    expect(fn.mock.calls[3][0]).toStrictEqual([
      ["-", "o", "o"],
      ["o", "-", "o"],
      ["-", "o", "x"],
    ])

    // x,y = 1,2
    subject = screen.getByTestId(getBtnTestId(1, 2))
    fireEvent.click(subject)
    expect(fn.mock.calls[4][0]).toStrictEqual([
      ["-", "o", "o"],
      ["o", "x", "o"],
      ["-", "-", "x"],
    ])
    fireEvent.contextMenu(subject)
    expect(fn.mock.calls[5][0]).toStrictEqual([
      ["-", "o", "o"],
      ["o", "x", "o"],
      ["-", "x", "x"],
    ])
  })
})
