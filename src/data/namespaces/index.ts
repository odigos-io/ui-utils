import { MOCK_SOURCES } from '../sources'
import { CONDITION_STATUS, K8S_RESOURCE_KIND } from '../../@types'

export const MOCK_NAMESPACES = [
  {
    name: 'default',
    selected: false,
    sources: MOCK_SOURCES,
  },
  {
    name: 'kube-public',
    selected: false,
    sources: undefined,
  },
  {
    name: 'tracing',
    selected: false,
    sources: [
      {
        namespace: 'tracing',
        name: 'jaeger',
        kind: K8S_RESOURCE_KIND.DEPLOYMENT,
        selected: true,
        otelServiceName: '',
        containers: [
          {
            containerName: 'jaeger-v2',
            language: 'go',
            runtimeVersion: '1.23.4',
            instrumented: true,
            instrumentationMessage: '',
            otelDistroName: 'golang-enterprise',
          },
        ],
        conditions: [
          {
            status: CONDITION_STATUS.TRUE,
            type: 'MarkedForInstrumentation',
            reason: 'WorkloadSource',
            message: "workload marked for automatic instrumentation by workload source CR 'source-fkhm5' in namespace 'tracing'",
            lastTransitionTime: '2025-02-18T11:30:56Z',
          },
          {
            status: CONDITION_STATUS.TRUE,
            type: 'RuntimeDetection',
            reason: 'DetectedSuccessfully',
            message: 'runtime detection completed successfully',
            lastTransitionTime: '2025-02-18T11:30:56Z',
          },
          {
            status: CONDITION_STATUS.TRUE,
            type: 'AgentEnabled',
            reason: 'EnabledSuccessfully',
            message: 'agent injected successfully to 1 containers: [jaeger-v2]',
            lastTransitionTime: '2025-02-18T11:31:03Z',
          },
          {
            status: CONDITION_STATUS.TRUE,
            type: 'WorkloadRollout',
            reason: 'RolloutTriggeredSuccessfully',
            message: 'workload rollout triggered successfully',
            lastTransitionTime: '2025-02-18T11:31:03Z',
          },
          {
            status: CONDITION_STATUS.TRUE,
            type: 'HealthyInstrumentationInstances',
            reason: null,
            message: '1/1 instances are healthy',
            lastTransitionTime: '2025-02-18T13:31:05+02:00',
          },
        ],
      },
    ],
  },
]
