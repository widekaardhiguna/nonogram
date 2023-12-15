const isEqual = (obj1: Object, obj2: Object) => {
  const obj1String = JSON.stringify(obj1)
  const obj2String = JSON.stringify(obj2)

  return obj1String === obj2String
}

export default isEqual
