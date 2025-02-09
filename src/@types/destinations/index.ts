import { FIELD_TYPES } from '../common'
import type { Comparison } from '../../functions'
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

type YamlCompareArr = [string, Comparison, string] | ['true' | 'false']

export interface DestinationYamlProperties {
  name: string // keyName (e.g. JAEGER_ENDPOINT_URL)
  componentType: FIELD_TYPES
  componentProperties?: string
  displayName?: string
  secret?: boolean
  initialValue?: string
  renderCondition?: YamlCompareArr
  hideFromReadData?: YamlCompareArr
  customReadDataLabels?: {
    condition: string
    title: string
    value: string
  }[]
}

export interface DestinationOption {
  type: Destination['destinationType']['type']
  displayName: Destination['destinationType']['displayName']
  imageUrl: Destination['destinationType']['imageUrl']
  supportedSignals: Destination['destinationType']['supportedSignals']
  testConnectionSupported: boolean
  fields: DestinationYamlProperties[]
}

export type DestinationCategories = {
  name: 'managed' | 'self hosted'
  description: string
  items: DestinationOption[]
}[]
