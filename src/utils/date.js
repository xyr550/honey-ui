const getYearMonthDay = (date) => {
  const year = date.getFullYear(); // 获取年
  const month = date.getMonth(); // 获取月
  const day = date.getDate(); // 获取日
  return { year, month, day };
}

function formatDate(date, format = 'yyyy-MM-dd') {
  let result = /(y+)/i.test(format)
    ? format.replace(
      RegExp.$1,
      (`${date.getFullYear()}`).substr(4 - RegExp.$1.length)
    )
    : format

  const patterns = {
    '(M+)': date.getMonth() + 1,
    '(d+)': date.getDate(),
    '(h+)': date.getHours(),
    '(m+)': date.getMinutes(),
    '(s+)': date.getSeconds(),
    '(S+)': date.getMilliseconds()
  }

  Object.keys(patterns).forEach((pattern) => {
    const re = new RegExp(
      pattern,
      (pattern === '(d+)' || pattern === '(h+)') ? 'i' : undefined
    )

    if (re.test(result)) {
      const len = RegExp.$1.length
      const v = `${patterns[pattern]}`
      const start = v.length
      let e
      if (len === 2) {
        e = (`00${v}`).substr(start)
      } else {
        e = len === 3 ? (`000${v}`).substr(start) : v
      }

      result = result.replace(
        RegExp.$1,
        e
      )
    }
  })

  return result
}

export default {
  getYearMonthDay,
  formatDate
}
