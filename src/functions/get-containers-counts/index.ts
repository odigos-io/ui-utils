import type { Source } from '../../@types'

export const getContainersInstrumentedCount = (containers: Source['containers']): string => {
  const instrumentedCount = containers?.reduce((prev, curr) => (curr.instrumented ? prev + 1 : prev), 0)
  const totalCount = containers?.length || 0

  return `${instrumentedCount}/${totalCount} instrumented`
}
