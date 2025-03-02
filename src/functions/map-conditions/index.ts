import type { Condition } from '../../@types'
import { splitCamelString } from '../split-camel-string'

export const mapConditions = (conditions: Condition[]): Condition[] => {
  return (
    conditions?.map(({ status, type, reason, message, lastTransitionTime }) => ({
      status,
      type: splitCamelString(type),
      reason: !!reason ? splitCamelString(reason) : '',
      message,
      lastTransitionTime,
    })) || []
  )
}
