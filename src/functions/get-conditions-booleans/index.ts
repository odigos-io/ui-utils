import { NOTIFICATION_TYPE, OTHER_STATUS, type Condition } from '../../@types'

export const getConditionsBooleans = (conditions: Condition[]) => {
  const hasErrors = !!conditions?.find(({ status }) => status === NOTIFICATION_TYPE.ERROR)
  const hasWarnings = !!conditions?.find(({ status }) => status === NOTIFICATION_TYPE.WARNING)
  const hasDisableds = !!conditions?.find(({ status }) => status === OTHER_STATUS.DISABLED)
  const hasLoadings = !!conditions?.find(({ status }) => status === OTHER_STATUS.LOADING)

  const priorotizedStatus = hasErrors
    ? NOTIFICATION_TYPE.ERROR
    : hasWarnings
    ? NOTIFICATION_TYPE.WARNING
    : hasDisableds
    ? NOTIFICATION_TYPE.INFO
    : undefined

  return {
    hasErrors,
    hasWarnings,
    hasDisableds,
    hasLoadings,
    priorotizedStatus,
  }
}
