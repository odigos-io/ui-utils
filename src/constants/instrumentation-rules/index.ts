import { getInstrumentationRuleIcon } from '../../functions'
import { INSTRUMENTATION_RULE_TYPE, type InstrumentationRuleOption } from '../../@types'

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
