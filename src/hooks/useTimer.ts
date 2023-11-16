import { Duration, intervalToDuration } from "date-fns"
import { useEffect, useRef, useState } from "react"

type UseTimer = {
  start: Date | null
  end?: Date
}

const useTimer = ({ start, end = new Date() }: UseTimer) => {
  const isUpdated = useRef(false)
  const [isStop, setIsStop] = useState(false)
  const [duration, setDuration] = useState<Duration>({})

  const stopTimer = () => {
    setIsStop(true)
  }

  useEffect(() => {
    if (isUpdated.current) return
    if (!start) return
    setDuration(() =>
      intervalToDuration({
        start: start,
        end: end,
      })
    )
    isUpdated.current = true
  }, [start])

  useEffect(() => {
    if (isStop) return
    if (!start) return
    const interval = setInterval(() => {
      setDuration(() =>
        intervalToDuration({
          start: start,
          end: end,
        })
      )
    }, 200)
    return () => {
      clearInterval(interval)
    }
  }, [start, end, isStop])

  return {
    duration,
    stopTimer,
  }
}

export default useTimer
