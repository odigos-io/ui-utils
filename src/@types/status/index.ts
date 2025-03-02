export enum NOTIFICATION_TYPE {
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  DEFAULT = 'default',
}

export enum HEALTH_STATUS {
  HEALTHY = 'healthy',
  UNHEALTHY = 'unhealthy',
}

export interface Condition {
  status: NOTIFICATION_TYPE | 'loading'
  type: string
  reason?: string | null
  message?: string | null
  lastTransitionTime: string
}
