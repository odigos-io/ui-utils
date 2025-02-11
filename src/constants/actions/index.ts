import { getActionIcon } from '../../functions'
import { ACTION_TYPE, SIGNAL_TYPE, type ActionOption } from '../../@types'

export const ACTION_OPTIONS: ActionOption[] = [
  {
    id: 'attributes',
    label: 'Attributes',
    icon: getActionIcon('attributes'),
    items: [
      {
        id: 'k8s_attributes',
        type: ACTION_TYPE.K8S_ATTRIBUTES,
        icon: getActionIcon(ACTION_TYPE.K8S_ATTRIBUTES),
        label: 'Kubernetes Attributes',
        description: 'Add dynamic k8s resource attributes to your data.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/k8sattributes',
        docsDescription: 'This action adds kubernetes related resource attributes to spans, metrics data points and log records.',
      },
      {
        id: 'add_cluster_info',
        type: ACTION_TYPE.ADD_CLUSTER_INFO,
        icon: getActionIcon(ACTION_TYPE.ADD_CLUSTER_INFO),
        label: 'Add Cluster Info',
        description: 'Add static cluster-scoped attributes to your data.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/addclusterinfo',
        docsDescription:
          'This action adds static resource attributes to spans, metrics data points and log records. It is useful to add cluster-wide attributes to all telemetry signals.',
      },
      {
        id: 'delete_attribute',
        type: ACTION_TYPE.DELETE_ATTRIBUTES,
        icon: getActionIcon(ACTION_TYPE.DELETE_ATTRIBUTES),
        label: 'Delete Attribute',
        description: 'Delete attributes from logs, metrics, and traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/deleteattribute',
        docsDescription:
          'This action will delete the specified attributes from all telemetry signals that are specified in the signals field, regardless of the source, or any other condition.',
      },
      {
        id: 'rename_attribute',
        type: ACTION_TYPE.RENAME_ATTRIBUTES,
        icon: getActionIcon(ACTION_TYPE.RENAME_ATTRIBUTES),
        label: 'Rename Attribute',
        description: 'Rename attributes in logs, metrics, and traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/renameattribute',
        docsDescription:
          'This action will rename the specified attributes from all telemetry signals that are specified in the signals field, regardless of the source, or any other condition.',
      },
      {
        id: 'pii-masking',
        type: ACTION_TYPE.PII_MASKING,
        icon: getActionIcon(ACTION_TYPE.PII_MASKING),
        label: 'PII Masking',
        description: 'Mask PII data in your traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/attributes/piimasking',
        docsDescription: 'This action processes a list of PII categories to be masked from the traces.',
      },
    ],
  },
  {
    id: 'sampler',
    label: 'Samplers',
    icon: getActionIcon('sampler'),
    items: [
      {
        id: 'error-sampler',
        type: ACTION_TYPE.ERROR_SAMPLER,
        icon: getActionIcon('sampler'),
        label: 'Error Sampler',
        description: 'Sample errors based on percentage.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/sampling/errorsampler',
        docsDescription: 'This action is a Global Action that supports error sampling by filtering out non-error traces.',
      },
      {
        id: 'latency-action',
        type: ACTION_TYPE.LATENCY_SAMPLER,
        icon: getActionIcon('sampler'),
        label: 'Latency Sampler',
        description: 'Add latency to your traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/sampling/latencysampler',
        docsDescription:
          'This action is an Endpoint Action that samples traces based on their duration for a specific service and endpoint (HTTP route) filter.',
      },
      {
        id: 'probabilistic-sampler',
        type: ACTION_TYPE.PROBABILISTIC_SAMPLER,
        icon: getActionIcon('sampler'),
        label: 'Probabilistic Sampler',
        description: 'Sample traces based on percentage.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/sampling/probabilisticsampler',
        docsDescription: 'This action supports probabilistic sampling based on a configured sampling percentage applied to the TraceID.',
      },
    ],
  },
]
