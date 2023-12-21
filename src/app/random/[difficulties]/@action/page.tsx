"use client"

import { DifficultiesPageProps } from "@/app/[difficulties]/page"
import { Button } from "@/components"
import { IconSquareX, IconRefresh } from "@tabler/icons-react"
import useRandomNonogram from "../_use-case/useRandomNonogram"

type RandomGamePageProps = {
  params: DifficultiesPageProps["params"]
}

const ActionPage = ({ params }: RandomGamePageProps) => {
  const { currentClearTime, onClear, onRestart } = useRandomNonogram({
    difficulty: params.difficulties,
  })

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
