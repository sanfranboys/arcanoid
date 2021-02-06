const classNames = (...args: any[]) => {
  let res: string[] = []

  for (const item of args) {
    if (typeof item === 'string' && item !== '') {
      res.push(item)
    } else if (typeof item === 'number' && !Number.isNaN(item) && item !== 0) {
      res.push(String(item))
    } else if (Array.isArray(item)) {
      res = [...res, ...classNames(...item).split(' ')]
    } else if (
      item !== null &&
      typeof item === 'object' &&
      String(item) === '[object Object]'
    ) {
      res = [
        ...res,
        ...Object.entries(item).reduce<string[]>((acc, [key, value]) => {
          if (value === true) {
            acc.push(key)
          }
          return acc
        }, []),
      ]
    }
  }

  return res.join(' ')
}

export default classNames
