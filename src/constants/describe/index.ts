import type { DescribeOdigos, DescribeSource } from '../../@types'

export const MOCK_DESCRIBE_ODIGOS: DescribeOdigos = {
  odigosVersion: {
    name: 'Odigos Version',
    value: 'v1.0.149',
    explain: 'the version of odigos deployment currently installed in the cluster',
  },
  kubernetesVersion: {
    name: 'Kubernetes Version',
    value: 'v1.32.0',
    explain: 'the version of kubernetes cluster where odigos is deployed',
  },
  tier: {
    name: 'Tier',
    value: 'onprem',
    explain: 'the tier of odigos deployment (community, enterprise, cloud)',
  },
  installationMethod: {
    name: 'Installation Method',
    value: 'odigos-cli',
    explain: 'the method used to deploy odigos in the cluster (helm or odigos cli)',
  },
  numberOfDestinations: 1,
  numberOfSources: 5,
  clusterCollector: {
    enabled: {
      name: 'Enabled',
      value: 'true',
      explain: 'should odigos create a cluster collector in the cluster',
    },
    collectorGroup: {
      name: 'Collector Group',
      value: 'created',
      status: 'success',
      explain: 'is the k8s collectors group object for cluster collector exists in the cluster',
    },
    deployed: {
      name: 'Deployed',
      value: 'true',
      status: 'success',
      explain:
        'deployed means the relevant k8s objects (deployment, configmap, secret, daemonset, etc) were created successfully and are expected to start. It does not mean the relevant pods were actually created, started, or are healthy.',
    },
    collectorReady: {
      name: 'Ready',
      value: 'true',
      status: 'success',
      explain: 'ready means that odigos has detected the collectors group as ready to start collecting/receiving data',
    },
    deploymentCreated: {
      name: 'Deployment',
      value: 'created',
      status: 'success',
      explain: 'is the k8s deployment object for cluster collector exists in the cluster',
    },
    expectedReplicas: {
      name: 'Expected Replicas',
      value: '1',
      explain: 'the number of pods that should be scheduled to run the cluster collector',
    },
    healthyReplicas: {
      name: 'Healthy Replicas',
      value: '1',
      status: 'success',
      explain: 'the number of k8s pods running the updated revision of the cluster collector and are healthy',
    },
    failedReplicas: {
      name: 'Failed Replicas',
      value: '0',
      status: 'success',
      explain: 'the number of k8s pods running the updated revision of the cluster collector and are not healthy',
    },
  },
  nodeCollector: {
    enabled: {
      name: 'Enabled',
      value: 'true',
      explain: 'should odigos deploy node collector daemonset in the cluster',
    },
    collectorGroup: {
      name: 'Collector Group',
      value: 'created',
      status: 'success',
      explain: 'is the k8s collectors group object for node collector exists in the cluster',
    },
    deployed: {
      name: 'Deployed',
      value: 'true',
      status: 'success',
      explain:
        'deployed means the relevant k8s objects (deployment, configmap, secret, daemonset, etc) were created successfully and are expected to start. It does not mean the relevant pods were actually created, started, or are healthy.',
    },
    collectorReady: {
      name: 'Ready',
      value: 'true',
      status: 'success',
      explain: 'ready means that odigos has detected the collectors group as ready to start collecting/receiving data',
    },
    daemonSet: {
      name: 'DaemonSet',
      value: 'created',
      status: 'success',
      explain: 'is the k8s daemonset object for node collector exists in the cluster',
    },
    desiredNodes: {
      name: 'Desired Nodes',
      value: '1',
      explain: 'the number of k8s nodes that should be running the node collector daemonset',
    },
    currentNodes: {
      name: 'Current Nodes',
      value: '1',
      status: 'success',
      explain:
        'the number of k8s nodes that have at least one pod of the node collector daemonset. this number counts the pod objects that were created on this node, regardless of the pod status or revision.',
    },
    updatedNodes: {
      name: 'Updated Nodes',
      value: '1',
      status: 'success',
      explain:
        'the number of k8s nodes that have only the latest version of the node collector daemonset pods. this number counts the pod objects that were created on this node with the latest revision, regardless of the pod status or readiness',
    },
    availableNodes: {
      name: 'Available Nodes',
      value: '1',
      status: 'success',
      explain:
        'the number of k8s nodes that have at least one pod of the node collector daemonset that is ready and available. this number counts the pod objects that were created on this node, regardless of the pod status or revision.',
    },
  },
  isSettled: true,
  hasErrors: false,
}

export const MOCK_DESCRIBE_SOURCE: DescribeSource = {
  name: {
    name: 'Name',
    value: 'inventory',
    explain: 'the name of the k8s workload object that this source describes',
  },
  kind: {
    name: 'Kind',
    value: 'Deployment',
    explain: 'the kind of the k8s workload object that this source describes (deployment/daemonset/statefulset)',
  },
  namespace: {
    name: 'Namespace',
    value: 'default',
    explain: 'the namespace of the k8s workload object that this source describes',
  },
  sourceObjects: {
    instrumented: {
      name: 'Instrumented',
      value: 'true',
      explain: 'whether this workload is considered for instrumentation based on the presence of the Source objects',
    },
    workload: {
      name: 'Workload',
      value: 'instrumented',
      explain: 'existence of workload specific Source object in k8s',
    },
    namespace: {
      name: 'Namespace',
      value: 'unset',
      explain: 'existence of namespace Source for this workload in k8s',
    },
    instrumentedText: {
      name: 'DecisionText',
      value: 'Workload is instrumented because the workload source is present and enabled',
      explain: 'a human readable explanation of the decision to instrument or not instrument this workload',
    },
  },
  runtimeInfo: {
    containers: [
      {
        containerName: {
          name: 'Container Name',
          value: 'inventory',
          explain: 'the unique name of the container in the k8s pod',
        },
        language: {
          name: 'Programming Language',
          value: 'python',
          status: 'success',
          explain: 'the programming language detected by odigos to be running in this container',
        },
        runtimeVersion: {
          name: 'Runtime Version',
          value: '3.11.9',
          explain: 'the version of the runtime detected by odigos to be running in this container',
        },
        envVars: [
          {
            name: 'PYTHONPATH',
            value: '/bar',
          },
        ],
      },
    ],
  },
  otelAgents: {
    created: {
      name: 'Created',
      value: 'created',
      status: 'success',
      explain:
        'whether the instrumentation config object exists in the cluster. When a Source object is created, an instrumentation config object is created',
    },
    createTime: {
      name: 'create time',
      value: '2025-02-09 08:43:39 +0000 UTC',
      explain: 'the time when the instrumentation config object was created',
    },
    containers: [
      {
        containerName: {
          name: 'Container Name',
          value: 'inventory',
          explain: 'the unique name of the container in the k8s pod',
        },
        agentEnabled: {
          name: 'Agent Enabled',
          value: 'true',
          explain: 'whether the agent is enabled for this container',
        },
        otelDistroName: {
          name: 'Otel Distro Name',
          value: 'python-enterprise',
          explain: 'the name of the OpenTelemetry distribution that is being used to instrument this container',
        },
      },
    ],
  },
  totalPods: 1,
  podsPhasesCount: 'Running 1',
  pods: [
    {
      podName: {
        name: 'Pod Name',
        value: 'inventory-56bbbb7c7d-94vdj',
        explain: 'the name of the k8s pod object that is part of the source workload',
      },
      nodeName: {
        name: 'Node Name',
        value: 'kind-control-plane',
        explain: 'the name of the k8s node where the current pod being described is scheduled',
      },
      phase: {
        name: 'Phase',
        value: 'Running',
        status: 'success',
        explain: 'the current pod phase for the pod being described',
      },
      containers: [
        {
          containerName: {
            name: 'Container Name',
            value: 'inventory',
            explain: 'the unique name of a container being described in the pod',
          },
          actualDevices: {
            name: 'Actual Devices',
            value: '[python-ebpf-enterprise]',
            explain: 'the odigos instrumentation devices that were found on this pod container instance',
          },
          instrumentationInstances: [
            {
              healthy: {
                name: 'Healthy',
                value: 'true',
                status: 'success',
                explain: 'health indication for the instrumentation running for this process',
              },
              identifyingAttributes: [
                {
                  name: 'service.instance.id',
                  value: '067a86ad-70a6-74e7-8000-71056c483208',
                },
                {
                  name: 'process.pid',
                  value: '1',
                },
                {
                  name: 'telemetry.sdk.language',
                  value: 'python',
                },
                {
                  name: 'k8s.namespace.name',
                  value: 'default',
                },
                {
                  name: 'k8s.container.name',
                  value: 'inventory',
                },
                {
                  name: 'k8s.pod.name',
                  value: 'inventory-56bbbb7c7d-94vdj',
                },
              ],
            },
            {
              healthy: {
                name: 'Healthy',
                value: 'true',
                status: 'success',
                explain: 'health indication for the instrumentation running for this process',
              },
              message: {
                name: 'Message',
                value: 'Successfully loaded eBPF probes to pod: inventory-56bbbb7c7d-94vdj container: inventory',
                explain: 'a human readable message from the instrumentation indicating the health of the instrumentation running for this process',
              },
            },
          ],
        },
      ],
    },
  ],
}
