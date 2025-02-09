import { getInstrumentationRuleIcon } from '../../functions'
import { INSTRUMENTATION_RULE_TYPE, type InstrumentationRule, type InstrumentationRuleOption } from '../../@types'

export const INSTRUMENTATION_RULE_OPTIONS: InstrumentationRuleOption[] = [
  {
    id: 'payload_collection',
    type: INSTRUMENTATION_RULE_TYPE.PAYLOAD_COLLECTION,
    icon: getInstrumentationRuleIcon(INSTRUMENTATION_RULE_TYPE.PAYLOAD_COLLECTION),
    label: 'Payload Collection',
    description: 'Collect span attributes containing payload data to traces.',
    docsEndpoint: '/pipeline/rules/payloadcollection',
    docsDescription: 'The “Payload Collection” Rule can be used to add span attributes containing payload data to traces.',
  },
  {
    id: 'code_attributes',
    type: INSTRUMENTATION_RULE_TYPE.CODE_ATTRIBUTES,
    icon: getInstrumentationRuleIcon(INSTRUMENTATION_RULE_TYPE.CODE_ATTRIBUTES),
    label: 'Code Attributes',
    description: 'Collect code attributes containing payload data to traces.',
    docsEndpoint: '/pipeline/rules/codeattributes',
    docsDescription: 'The “Code Attributes” Rule can be used to add code attributes containing payload data to traces.',
  },
]

export const MOCK_INSTRUMENTATION_RULES: InstrumentationRule[] = [
  {
    type: INSTRUMENTATION_RULE_TYPE.PAYLOAD_COLLECTION,
    ruleId: 'ui-instrumentation-rule-gdpzw',
    ruleName: '',
    notes: '',
    disabled: false,
    mutable: true,
    profileName: '',
    payloadCollection: {
      httpRequest: {
        mimeTypes: null,
        maxPayloadLength: null,
        dropPartialPayloads: null,
      },
      httpResponse: {
        mimeTypes: null,
        maxPayloadLength: null,
        dropPartialPayloads: null,
      },
      dbQuery: {
        maxPayloadLength: null,
        dropPartialPayloads: null,
      },
      messaging: {
        maxPayloadLength: null,
        dropPartialPayloads: null,
      },
    },
    codeAttributes: {
      column: null,
      filePath: null,
      function: null,
      lineNumber: null,
      namespace: null,
      stacktrace: null,
    },
  },
  {
    type: INSTRUMENTATION_RULE_TYPE.CODE_ATTRIBUTES,
    ruleId: 'ui-instrumentation-rule-zkk79',
    ruleName: '',
    notes: '',
    disabled: false,
    mutable: true,
    profileName: '',
    payloadCollection: {
      httpRequest: null,
      httpResponse: null,
      dbQuery: null,
      messaging: null,
    },
    codeAttributes: {
      column: null,
      filePath: true,
      function: true,
      lineNumber: true,
      namespace: null,
      stacktrace: null,
    },
  },
]
