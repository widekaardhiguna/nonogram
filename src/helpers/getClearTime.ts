import padTime from "./padTime"

const getClearTime = (duration: Duration | undefined | null) => {
  if (duration?.hours) {
    duration.hours =
      (duration.years ?? 0) * 8766 +
      (duration.weeks ?? 0) * 168 +
      (duration.days ?? 0) * 24 +
      duration.hours
  }
  return `${padTime(duration?.hours)}:${padTime(duration?.minutes)}:${padTime(
    duration?.seconds
  )}`
}

export default getClearTime
