import { ActionsIcon, DestinationsIcon, RulesIcon, SourcesIcon, type SVG } from '@odigos/ui-icons'
import { ENTITY_TYPES } from '../../@types'

export const getEntityIcon = (type: ENTITY_TYPES) => {
  const LOGOS: Record<ENTITY_TYPES, SVG> = {
    [ENTITY_TYPES.SOURCE]: SourcesIcon,
    [ENTITY_TYPES.DESTINATION]: DestinationsIcon,
    [ENTITY_TYPES.ACTION]: ActionsIcon,
    [ENTITY_TYPES.INSTRUMENTATION_RULE]: RulesIcon,
  }

  return LOGOS[type]
}
