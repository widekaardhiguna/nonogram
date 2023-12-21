import getClearTime from "@/helpers/time/getClearTime"
import { cx } from "class-variance-authority"
import { Duration, intervalToDuration } from "date-fns"

type FinishedTimeProps = {
  startAt: Date
  finishedAt: Date
}

const FinishedTime = ({ startAt, finishedAt }: FinishedTimeProps) => {
  const duration = intervalToDuration({
    start: startAt,
    end: finishedAt,
  })
  return (
    <div className={"text-primary-400 text-center xl:mb-6"}>
      Finished, your clear time is <span>{getClearTime(duration)}</span>
    </div>
  )
}

export default FinishedTime
