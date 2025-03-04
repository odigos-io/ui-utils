export enum NOTIFICATION_TYPE {
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  DEFAULT = 'default',
}

export enum OTHER_STATUS {
  LOADING = 'loading',
  DISABLED = 'disabled',
}

export interface Condition {
  status: NOTIFICATION_TYPE | OTHER_STATUS
  type: string
  reason?: string | null
  message?: string | null
  lastTransitionTime: string
}
