export enum NOTIFICATION_TYPE {
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  DEFAULT = 'default',
}

export interface Condition {
  status: NOTIFICATION_TYPE | 'loading' | 'disabled'
  type: string
  reason?: string | null
  message?: string | null
  lastTransitionTime: string
}
