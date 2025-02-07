export enum SIGNAL_TYPE {
  LOGS = 'logs',
  METRICS = 'metrics',
  TRACES = 'traces',
}

export interface MonitorsOption {
  id: SIGNAL_TYPE
  value: string
}
