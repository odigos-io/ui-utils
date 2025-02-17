import { PLATFORM_TYPE } from '../../@types'

export const getPlatformLabel = (type: PLATFORM_TYPE) => {
  const LABELS: Record<PLATFORM_TYPE, string> = {
    [PLATFORM_TYPE.K8S]: 'Kubernetes Cluster',
    [PLATFORM_TYPE.VM]: 'Virtual Machine',
  }

  return LABELS[type]
}
