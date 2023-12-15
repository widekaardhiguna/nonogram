const padTime = (time: number | undefined) => {
  return time?.toString().padStart(2, "0") ?? "--"
}

export default padTime
