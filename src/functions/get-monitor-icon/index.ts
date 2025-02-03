import { LogsIcon, MetricsIcon, type SVG, TracesIcon } from '@odigos/ui-icons'
import { SIGNAL_TYPE } from '../../@types'

export const getMonitorIcon = (type: SIGNAL_TYPE) => {
  const LOGOS: Record<SIGNAL_TYPE, SVG> = {
    [SIGNAL_TYPE.LOGS]: LogsIcon,
    [SIGNAL_TYPE.METRICS]: MetricsIcon,
    [SIGNAL_TYPE.TRACES]: TracesIcon,
  }

  return LOGOS[type]
}
