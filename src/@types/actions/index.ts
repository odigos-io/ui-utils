import { SIGNAL_TYPE } from '../signals'
import type { SVG } from '@odigos/ui-icons'
import type { Condition, FetchedCondition } from '../status'

export enum ACTION_TYPE {
  ADD_CLUSTER_INFO = 'AddClusterInfo',
  DELETE_ATTRIBUTES = 'DeleteAttribute',
  RENAME_ATTRIBUTES = 'RenameAttribute',
  ERROR_SAMPLER = 'ErrorSampler',
  PROBABILISTIC_SAMPLER = 'ProbabilisticSampler',
  LATENCY_SAMPLER = 'LatencySampler',
  PII_MASKING = 'PiiMasking',
}

export interface Action {
  id: string
  type: ACTION_TYPE
  conditions: FetchedCondition[] | Condition[] | null
  spec: {
    actionName?: string
    notes?: string
    signals: SIGNAL_TYPE[]
    disabled?: boolean

    // AddClusterInfo
    clusterAttributes?: { attributeName: string; attributeStringValue: string }[] | null
    // DeleteAttributes
    attributeNamesToDelete?: string[] | null
    // RenameAttributes
    renames?: { [oldKey: string]: string } | null
    // PiiMasking
    piiCategories?: string[] | null
    // ErrorSampler
    fallbackSamplingRatio?: number | null
    // ProbabilisticSampler
    samplingPercentage?: string | null
    // LatencySampler
    endpointsFilters?:
      | {
          serviceName: string
          httpRoute: string
          minimumLatencyThreshold: number
          fallbackSamplingRatio: number
        }[]
      | null
  }
}

export interface ActionOption {
  id: string
  type?: ACTION_TYPE
  icon?: SVG
  label: string
  description?: string
  allowedSignals?: SIGNAL_TYPE[]
  docsEndpoint?: string
  docsDescription?: string
  items?: ActionOption[]
}
