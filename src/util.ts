export const millisecondsPerDay = 1000 * 60 * 60 * 24

export const getNumberOfDaysBetween = (date1: Date, date2: Date) =>
  Math.ceil((date1.getTime() - date2.getTime()) / millisecondsPerDay)

export const getNumberOfWeeksBetween = (date1: Date, date2: Date) =>
  Math.round(getNumberOfDaysBetween(date1, date2) / 7)

export const getNumberOfWeeksFromToday = (date: string) =>
  getNumberOfWeeksBetween(new Date(date), new Date())

export const isSafari = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return (
    /safari/.test(userAgent) &&
    /applewebkit/.test(userAgent) &&
    /version\/13./.test(userAgent) &&
    !/chrome/.test(userAgent)
  )
}

export const formatDateSafari = (date: string) => {
  const values = date.split(/[^0-9]/)
  return new Date(
    parseInt(values[0], 10),
    parseInt(values[1], 10) - 1,
    parseInt(values[2], 10),
    parseInt(values[3], 10),
    parseInt(values[4], 10),
    parseInt(values[5], 10)
  ).toUTCString()
}
