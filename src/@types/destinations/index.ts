import type { Condition, FetchedCondition } from '../status'

export interface Destination {
  id: string
  name: string
  exportedSignals: {
    traces: boolean
    metrics: boolean
    logs: boolean
  }
  fields: string
  conditions: FetchedCondition[] | Condition[] | null
  destinationType: {
    type: string
    displayName: string
    imageUrl: string
    supportedSignals: {
      logs: {
        supported: boolean
      }
      metrics: {
        supported: boolean
      }
      traces: {
        supported: boolean
      }
    }
  }
}
