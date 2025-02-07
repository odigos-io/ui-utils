export enum K8S_RESOURCE_KIND {
  DEPLOYMENT = 'Deployment',
  DAEMON_SET = 'DaemonSet',
  STATEFUL_SET = 'StatefulSet',
}

export interface WorkloadId {
  namespace: string
  name: string
  kind: K8S_RESOURCE_KIND | '' // Empty string is important for default values
}
