import { Duration } from "date-fns"

type FirstTimeClearProps = {
  duration: Duration | undefined | null
}

const FirstTimeClear = ({ duration }: FirstTimeClearProps) => {
  return (
    <p className="text-white mb-6">
      Your first clear time: {duration?.hours}:{duration?.minutes}:
      {duration?.seconds}
    </p>
  )
}

export default FirstTimeClear
