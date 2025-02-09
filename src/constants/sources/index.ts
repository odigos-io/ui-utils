import { CONDITION_STATUS, type FetchedCondition, K8S_RESOURCE_KIND, PROGRAMMING_LANGUAGES, type Source } from '../../@types'

export const MOCK_SOURCES: Source[] = [
  {
    namespace: 'default',
    name: 'coupon',
    kind: K8S_RESOURCE_KIND.DEPLOYMENT,
    selected: true,
    otelServiceName: '',
    containers: [
      {
        containerName: 'coupon',
        language: PROGRAMMING_LANGUAGES.JAVASCRIPT,
        runtimeVersion: '18.3.0',
        instrumented: true,
        instrumentationMessage: '',
        otelDistroName: 'nodejs-enterprise',
      },
    ],
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        message: 'agent injected successfully to 1 containers: [coupon]',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: 'workload rollout triggered successfully',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: '1/1 instances are healthy',
        lastTransitionTime: '2025-02-09T08:44:09Z',
      } as FetchedCondition,
    ],
  },
  {
    namespace: 'default',
    name: 'frontend',
    kind: K8S_RESOURCE_KIND.DEPLOYMENT,
    selected: true,
    otelServiceName: '',
    containers: [
      {
        containerName: 'frontend',
        language: PROGRAMMING_LANGUAGES.JAVA,
        runtimeVersion: '17.0.12+7',
        instrumented: true,
        instrumentationMessage: '',
        otelDistroName: 'java-enterprise',
      },
    ],
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        message: 'agent injected successfully to 1 containers: [frontend]',
        lastTransitionTime: '2025-02-09T08:44:04Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: 'workload rollout triggered successfully',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: '1/1 instances are healthy',
        lastTransitionTime: '2025-02-09T08:44:08Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.FALSE,
        message: 'workload failed to... something',
        lastTransitionTime: '2025-02-09T09:00:00Z',
      } as FetchedCondition,
    ],
  },
  {
    namespace: 'default',
    name: 'inventory',
    kind: K8S_RESOURCE_KIND.DEPLOYMENT,
    selected: true,
    otelServiceName: '',
    containers: [
      {
        containerName: 'inventory',
        language: PROGRAMMING_LANGUAGES.PYTHON,
        runtimeVersion: '3.11.9',
        instrumented: true,
        instrumentationMessage: '',
        otelDistroName: 'python-enterprise',
      },
    ],
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        message: 'agent injected successfully to 1 containers: [inventory]',
        lastTransitionTime: '2025-02-09T08:44:04Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: 'workload rollout triggered successfully',
        lastTransitionTime: '2025-02-09T08:44:04Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: '2/2 instances are healthy',
        lastTransitionTime: '2025-02-09T08:44:07Z',
      } as FetchedCondition,
    ],
  },
  {
    namespace: 'default',
    name: 'membership',
    kind: K8S_RESOURCE_KIND.DEPLOYMENT,
    selected: true,
    otelServiceName: '',
    containers: [
      {
        containerName: 'membership',
        language: PROGRAMMING_LANGUAGES.GO,
        runtimeVersion: '1.21.4',
        instrumented: true,
        instrumentationMessage: '',
        otelDistroName: 'golang-enterprise',
      },
    ],
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        message: 'agent injected successfully to 1 containers: [membership]',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: 'workload rollout triggered successfully',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: '1/1 instances are healthy',
        lastTransitionTime: '2025-02-09T08:44:12Z',
      } as FetchedCondition,
    ],
  },
  {
    namespace: 'default',
    name: 'pricing',
    kind: K8S_RESOURCE_KIND.DEPLOYMENT,
    selected: true,
    otelServiceName: '',
    containers: [
      {
        containerName: 'pricing',
        language: PROGRAMMING_LANGUAGES.DOTNET,
        runtimeVersion: '',
        instrumented: true,
        instrumentationMessage: '',
        otelDistroName: 'dotnet-community',
      },
    ],
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        message: 'agent injected successfully to 1 containers: [pricing]',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
      {
        status: CONDITION_STATUS.TRUE,
        message: 'workload rollout triggered successfully',
        lastTransitionTime: '2025-02-09T08:44:05Z',
      } as FetchedCondition,
    ],
  },
]
