const generateRule = (solution: string[][]) => {
  let y: number[][] = []
  let x: number[][] = []

  solution.forEach((_, index) => {
    const ruleY = getRuleRow(solution, index)
    y.push(ruleY)

    const ruleX = getRuleCol(solution, index)
    x.push(ruleX)
  })

  return { x, y }
}

export default generateRule

const getRuleRow = (solution: string[][], yIndex: number) => {
  const row = solution[yIndex]
  const rowString = row.join("")

  return getRule(rowString)
}

const getRuleCol = (solution: string[][], xIndex: number) => {
  let colString = ""
  for (let yIndex in solution) {
    colString += solution[yIndex][xIndex]
  }

  return getRule(colString)
}

const getRule = (string: string) => {
  let arr: number[] = []

  const matches = string.match(regex)
  if (!matches) return arr

  for (let i in matches) {
    arr.push(matches[i].length)
  }
  return arr
}

const regex = /o+/g
