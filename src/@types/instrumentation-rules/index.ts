import type { SVG } from '@odigos/ui-icons'
import type { WorkloadId } from '../sources'

export enum INSTRUMENTATION_RULE_TYPE {
  PAYLOAD_COLLECTION = 'PayloadCollection',
  CODE_ATTRIBUTES = 'CodeAttributes',
  UNKNOWN_TYPE = 'UnknownType',
}

export interface InstrumentationRule {
  ruleId: string
  ruleName: string
  type: INSTRUMENTATION_RULE_TYPE // does not come from backend, it's derived during GET
  notes: string
  disabled: boolean
  mutable: boolean
  profileName: string
  workloads?: WorkloadId[] | null
  instrumentationLibraries?: { language: string; library: string }[] | null
  payloadCollection?: PayloadCollection | null
  codeAttributes?: CodeAttributes | null
}

// Payload Collection for Instrumentation Rules
interface HttpPayloadCollection {
  mimeTypes?: string[] | null
  maxPayloadLength?: number | null
  dropPartialPayloads?: boolean | null
}
interface DbQueryPayloadCollection {
  maxPayloadLength?: number | null
  dropPartialPayloads?: boolean | null
}
interface MessagingPayloadCollection {
  maxPayloadLength?: number | null
  dropPartialPayloads?: boolean | null
}

export enum PAYLOAD_COLLECTION_KEY_TYPES {
  HTTP_REQUEST = 'httpRequest',
  HTTP_RESPONSE = 'httpResponse',
  DB_QUERY = 'dbQuery',
  MESSAGING = 'messaging',
}
export interface PayloadCollection {
  [PAYLOAD_COLLECTION_KEY_TYPES.HTTP_REQUEST]?: HttpPayloadCollection | null
  [PAYLOAD_COLLECTION_KEY_TYPES.HTTP_RESPONSE]?: HttpPayloadCollection | null
  [PAYLOAD_COLLECTION_KEY_TYPES.DB_QUERY]?: DbQueryPayloadCollection | null
  [PAYLOAD_COLLECTION_KEY_TYPES.MESSAGING]?: MessagingPayloadCollection | null
}

// Code Attributes for Instrumentation Rules
export enum CODE_ATTRIBUTES_KEY_TYPES {
  COLUMN = 'column',
  FILE_PATH = 'filePath',
  FUNCTION = 'function',
  LINE_NUMBER = 'lineNumber',
  NAMESPACE = 'namespace',
  STACKTRACE = 'stacktrace',
}
export interface CodeAttributes {
  [CODE_ATTRIBUTES_KEY_TYPES.COLUMN]?: boolean | null
  [CODE_ATTRIBUTES_KEY_TYPES.FILE_PATH]?: boolean | null
  [CODE_ATTRIBUTES_KEY_TYPES.FUNCTION]?: boolean | null
  [CODE_ATTRIBUTES_KEY_TYPES.LINE_NUMBER]?: boolean | null
  [CODE_ATTRIBUTES_KEY_TYPES.NAMESPACE]?: boolean | null
  [CODE_ATTRIBUTES_KEY_TYPES.STACKTRACE]?: boolean | null
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
