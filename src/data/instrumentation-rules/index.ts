import { INSTRUMENTATION_RULE_TYPE, type InstrumentationRule } from '../../@types'

export const MOCK_INSTRUMENTATION_RULES: InstrumentationRule[] = [
  {
    type: INSTRUMENTATION_RULE_TYPE.PAYLOAD_COLLECTION,
    ruleId: 'ui-instrumentation-rule-gdpzw',
    ruleName: '',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
