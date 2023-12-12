import { NonogramExample } from "./NonogramExample"

export const steps = [
  {
    example: <NonogramExample.First />,
    description: (
      <p>
        Look at example, you will see a grid with some numbers attach to them.
        To solve the puzzle, you need to fill the empty squares based on those
        numbers.
      </p>
    ),
  },
  {
    example: <NonogramExample.Second />,
    description: (
      <p>
        The number up there in a column tells you how many squares to fill in.
        Like, if it&apos;s a 4, it means you have to put 4 filled squares in
        that column.
      </p>
    ),
  },
  {
    example: <NonogramExample.Third />,
    description: (
      <p>
        The rule goes for rows too. But this time, you&apos;ll notice two
        numbers (1, 2). This means you should place 1 square, then 2 squares in
        that row, while making sure there&apos;s AT LEAST 1 space between them.
      </p>
    ),
  },
  {
    example: <NonogramExample.Fourth />,
    description: (
      <>
        <p>
          Continue doing this until all squares filled based on all the numbers.
          This is what its looks like when the puzzle is completed.
        </p>
        <br />
        <p>Tips: </p>
        <ul className="list-disc pl-5">
          <li>
            Start with Rows or Columns with Large Clues. If a row or column has
            a large clue, it can be easier to start there, as it gives you more
            information to work with.
          </li>
          <li>
            Use Cross-Referencing: Pay attention to intersections of rows and
            columns. If a cell must be filled in both a row and a column, it
            provides a high level of certainty.
          </li>
          <li>
            You can mark a square with <span className="text-red-500">x</span>{" "}
            if you are sure the square is empty. You can do this by using right
            click (for desktop) or hold touch screen (for mobile).
          </li>
        </ul>
      </>
    ),
  },
] as const
