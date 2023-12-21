"use client"

import getClearTime from "@/helpers/time/getClearTime"
import useTimer from "@/hooks/useTimer"
import { cx } from "class-variance-authority"
import { Duration } from "date-fns"

type TimerProps = {
  startAt: Date
}

const Timer = ({ startAt }: TimerProps) => {
  const { duration } = useTimer({
    start: new Date(startAt),
  })

  return (
    <div className={"text-white text-center xl:mb-6"}>
      Time passed: <span>{getClearTime(duration)}</span>
    </div>
  )
}

export default Timer
