import { CodeAttributesIcon, OdigosLogo, PayloadCollectionIcon, type SVG } from '@odigos/ui-icons'
import { INSTRUMENTATION_RULE_TYPE } from '../../@types'

export const getInstrumentationRuleIcon = (type: INSTRUMENTATION_RULE_TYPE) => {
  const LOGOS: Record<INSTRUMENTATION_RULE_TYPE, SVG> = {
    [INSTRUMENTATION_RULE_TYPE.PAYLOAD_COLLECTION]: PayloadCollectionIcon,
    [INSTRUMENTATION_RULE_TYPE.CODE_ATTRIBUTES]: CodeAttributesIcon,
    [INSTRUMENTATION_RULE_TYPE.UNKNOWN_TYPE]: OdigosLogo,
  }

  return LOGOS[type]
}
