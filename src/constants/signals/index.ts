import { SIGNAL_TYPE, type MonitorsOption } from '../../@types'

export const MONITORS_OPTIONS: MonitorsOption[] = [
  {
    id: SIGNAL_TYPE.LOGS,
    value: 'Logs',
  },
  {
    id: SIGNAL_TYPE.METRICS,
    value: 'Metrics',
  },
  {
    id: SIGNAL_TYPE.TRACES,
    value: 'Traces',
  },
]
