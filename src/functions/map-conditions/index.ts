import { type Condition, CONDITION_STATUS, type FetchedCondition, NOTIFICATION_TYPE } from '../../@types'

export const mapConditions = (conditions: (FetchedCondition | Condition)[]): Condition[] => {
  return (
    conditions?.map(({ status, message, lastTransitionTime }) => ({
      status:
        status === CONDITION_STATUS.FALSE
          ? NOTIFICATION_TYPE.ERROR
          : status === CONDITION_STATUS.TRUE
          ? NOTIFICATION_TYPE.SUCCESS
          : status === CONDITION_STATUS.UNKNOWN
          ? NOTIFICATION_TYPE.WARNING
          : (status as NOTIFICATION_TYPE),
      message,
      lastTransitionTime,
    })) || []
  )
}
