"use client"

import { Button } from "@/components"
import { IconSquareX, IconRefresh } from "@tabler/icons-react"
import useRandomNonogram from "../_use-case/useRandomNonogram"

const ActionPage = () => {
  const { currentClearTime, onClear, onRestart } = useRandomNonogram()

  return (
    <>
      {!currentClearTime.finishedAt && (
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          rightIcon={<IconSquareX />}
          onClick={onClear}
        >
          Clear
        </Button>
      )}
      <Button
        size="small"
        color={currentClearTime.finishedAt ? "primary" : "secondary"}
        variant="outlined"
        rightIcon={<IconRefresh />}
        onClick={onRestart}
      >
        Restart
      </Button>
    </>
  )
}

export default ActionPage
