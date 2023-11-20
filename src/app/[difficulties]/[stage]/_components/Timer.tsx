"use client"

import getClearTime from "@/helpers/getClearTime"
import { cx } from "class-variance-authority"
import { Duration } from "date-fns"

type TimerProps = {
  duration: Duration
}

const Timer = ({ duration }: TimerProps) => {
  return (
    <div className={cx("text-white text-center", "xl:mb-6")}>
      Time passed: <span>{getClearTime(duration)}</span>
    </div>
  )
}

export default Timer
