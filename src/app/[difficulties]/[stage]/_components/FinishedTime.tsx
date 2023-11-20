import getClearTime from "@/helpers/getClearTime"
import { cx } from "class-variance-authority"
import { Duration } from "date-fns"

type FinishedTimeProps = {
  duration: Duration
}

const FinishedTime = ({ duration }: FinishedTimeProps) => {
  return (
    <div className={cx("text-primary-400 text-center", "xl:mb-6")}>
      Finished, your clear time is <span>{getClearTime(duration)}</span>
    </div>
  )
}

export default FinishedTime
