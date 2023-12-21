"use client"

import FinishedTime from "@/app/[difficulties]/[stage]/_components/FinishedTime"
import Timer from "@/app/[difficulties]/[stage]/_components/Timer"

import { Fragment } from "react"
import useRandomNonogram from "../_use-case/useRandomNonogram"

const TimerPage = () => {
  const { currentClearTime } = useRandomNonogram()
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
