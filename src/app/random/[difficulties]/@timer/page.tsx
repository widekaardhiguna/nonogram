"use client"

import FinishedTime from "@/app/[difficulties]/[stage]/_components/FinishedTime"
import Timer from "@/app/[difficulties]/[stage]/_components/Timer"

import { Fragment } from "react"
import useRandomStageStore from "../_stores/useRandomStageStore"
import { DifficultiesPageProps } from "@/app/[difficulties]/page"
import useRandomNonogram from "../_use-case/useRandomNonogram"

type RandomGamePageProps = {
  params: DifficultiesPageProps["params"]
}

const TimerPage = ({ params }: RandomGamePageProps) => {
  const { currentClearTime } = useRandomNonogram({
    difficulty: params.difficulties,
  })
  return (
    <Fragment>
      {currentClearTime.finishedAt && (
        <FinishedTime
          startAt={currentClearTime.startAt}
          finishedAt={currentClearTime.finishedAt}
        />
      )}
      {!currentClearTime.finishedAt && (
        <Timer startAt={new Date(currentClearTime.startAt)} />
      )}
    </Fragment>
  )
}

export default TimerPage
