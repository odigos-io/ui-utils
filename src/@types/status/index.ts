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

export enum CONDITION_STATUS {
  FALSE = 'False',
  TRUE = 'True',
  UNKNOWN = 'Unknown',
}

// FetchedCondition is the condition as it comes from the API,
// although we don't define API interfaces in this project, conditions in specific are not mapped on get-queries, so we need to define it here and provide a mapping function
export interface FetchedCondition {
  status: CONDITION_STATUS
  type: string
  reason: string
  message: string
  lastTransitionTime: string
}

// Condition is the condition after it has been mapped
export interface Condition {
  status: NOTIFICATION_TYPE
  message: string
  lastTransitionTime: string
}
