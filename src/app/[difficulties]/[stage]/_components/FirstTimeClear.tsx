import getClearTime from "@/helpers/getClearTime"
import { Duration } from "date-fns"

type FirstTimeClearProps = {
  duration: Duration | undefined | null
}

const FirstTimeClear = ({ duration }: FirstTimeClearProps) => {
  return (
    <p className="text-white mb-6">
      Your first clear time: {getClearTime(duration)}
    </p>
  )
}

export default FirstTimeClear
