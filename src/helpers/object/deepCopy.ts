const deepCopy = <T extends Object>(obj: T) => {
  return JSON.parse(JSON.stringify(obj)) as T
}

export default deepCopy
