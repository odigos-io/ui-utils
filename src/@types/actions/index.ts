import { SIGNAL_TYPE } from '../signals'
import type { SVG } from '@odigos/ui-icons'

export enum ACTION_TYPE {
  ADD_CLUSTER_INFO = 'AddClusterInfo',
  DELETE_ATTRIBUTES = 'DeleteAttribute',
  RENAME_ATTRIBUTES = 'RenameAttribute',
  ERROR_SAMPLER = 'ErrorSampler',
  PROBABILISTIC_SAMPLER = 'ProbabilisticSampler',
  LATENCY_SAMPLER = 'LatencySampler',
  PII_MASKING = 'PiiMasking',
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
