import { PROGRAMMING_LANGUAGES } from '../common'
import type { Condition } from '../status'

export enum K8S_RESOURCE_KIND {
  DEPLOYMENT = 'Deployment',
  DAEMON_SET = 'DaemonSet',
  STATEFUL_SET = 'StatefulSet',
}

export interface WorkloadId {
  namespace: string
  name: string
  kind: K8S_RESOURCE_KIND | '' // Empty string is important for default form values
}

export interface Source extends WorkloadId {
  selected: boolean
  otelServiceName: string
  numberOfInstances?: number
  containers:
    | {
        containerName: string
        language: PROGRAMMING_LANGUAGES
        runtimeVersion: string
        instrumented: boolean
        instrumentationMessage: string
        otelDistroName: string | null
      }[]
    | null
  conditions: Condition[] | null
}
