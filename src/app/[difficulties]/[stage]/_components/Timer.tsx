"use client"

import useTimer from "@/hooks/useTimer"
import { cx } from "class-variance-authority"
import { Duration } from "date-fns"

type TimerProps = {
  duration: Duration
}

const Timer = ({ duration }: TimerProps) => {
  return (
    <div className={cx("text-white text-center", "xl:mb-6")}>
      Time passed:{" "}
      <span>
        {pad(duration.hours)}:{pad(duration.minutes)}:{pad(duration.seconds)}
      </span>
    </div>
  )
}

export default Timer

const pad = (time: number | undefined) => {
  return time?.toString().padStart(2, "0") ?? "--"
}
