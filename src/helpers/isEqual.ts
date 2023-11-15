const isEqual = (obj1: Object, obj2: Object) => {
  const obj1String = obj1.toString()
  const obj2String = obj2.toString()

  return obj1String === obj2String
}

export default isEqual
