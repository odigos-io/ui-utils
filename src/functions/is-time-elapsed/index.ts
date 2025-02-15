export const isTimeElapsed = (originDate: Date | string | number, difference: number = 0) => {
  const now = new Date().getTime()
  const compareWith = new Date(originDate).getTime()

  return now - compareWith >= difference
}
