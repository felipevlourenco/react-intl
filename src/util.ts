export const millisecondsPerDay = 1000 * 60 * 60 * 24

export const getNumberOfDaysBetween = (date1: Date, date2: Date) =>
  Math.ceil((date1.getTime() - date2.getTime()) / millisecondsPerDay)

export const getNumberOfWeeksBetween = (date1: Date, date2: Date) =>
  Math.round(getNumberOfDaysBetween(date1, date2) / 7)

export const getNumberOfWeeksFromToday = (date: string) =>
  getNumberOfWeeksBetween(new Date(date), new Date())
