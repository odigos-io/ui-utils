import { NOTIFICATION_TYPE, type Condition } from '../../@types'

export const getConditionsBooleans = (conditions: Condition[]) => {
  const hasErrors = !!conditions?.find(({ status }) => status === NOTIFICATION_TYPE.ERROR)
  const hasWarnings = !!conditions?.find(({ status }) => status === NOTIFICATION_TYPE.WARNING)
  const hasDisableds = !!conditions?.find(({ status }) => status === 'disabled')
  const hasLoadings = !!conditions?.find(({ status }) => status === 'loading')

  return {
    hasErrors,
    hasWarnings,
    hasDisableds,
    hasLoadings,
  }
}
