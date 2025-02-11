import { INSTRUMENTATION_RULE_TYPE, type InstrumentationRule } from '../../@types'

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
