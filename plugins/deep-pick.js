export default({app}, inject) => {
  const deepPick = function (object, ...paths) {
    paths = paths.flat()
    if (object instanceof Array) {
      return object.map(e => deepPick(e, paths))
    }
    else {
      const o = {}
      for (const key in object) {
        const value = object[key]
        if (value instanceof Object) {
          const sub = deepPick(value, paths)
          if (Object.keys(sub).length > 0) {
            o[key] = sub
          }
        }
        else if (!paths.includes(key)) {
          continue;
        }
        else {
          o[key] = value
        }
      }
      return o
    }
  }

  inject('deepPick', deepPick)
}
