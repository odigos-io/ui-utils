import type { SVG } from '@odigos/ui-icons'

export enum INSTRUMENTATION_RULE_TYPE {
  PAYLOAD_COLLECTION = 'PayloadCollection',
  CODE_ATTRIBUTES = 'CodeAttributes',
  UNKNOWN_TYPE = 'UnknownType',
}

export interface InstrumentationRuleOption {
  id: string
  type?: INSTRUMENTATION_RULE_TYPE
  icon?: SVG
  label: string
  description?: string
  docsEndpoint?: string
  docsDescription?: string
  items?: InstrumentationRuleOption[]
}
