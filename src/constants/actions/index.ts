import { getActionIcon } from '../../functions'
import { type Action, ACTION_TYPE, SIGNAL_TYPE, type ActionOption, CONDITION_STATUS } from '../../@types'

export const ACTION_OPTIONS: ActionOption[] = [
  {
    id: 'attributes',
    label: 'Attributes',
    icon: getActionIcon('attributes'),
    items: [
      {
        id: 'add_cluster_info',
        type: ACTION_TYPE.ADD_CLUSTER_INFO,
        icon: getActionIcon(ACTION_TYPE.ADD_CLUSTER_INFO),
        label: 'Add Cluster Info',
        description: 'Add static cluster-scoped attributes to your data.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/addclusterinfo',
        docsDescription:
          'The “Add Cluster Info” Odigos Action can be used to add resource attributes to telemetry signals originated from the k8s cluster where the Odigos is running.',
      },
      {
        id: 'delete_attribute',
        type: ACTION_TYPE.DELETE_ATTRIBUTES,
        icon: getActionIcon(ACTION_TYPE.DELETE_ATTRIBUTES),
        label: 'Delete Attribute',
        description: 'Delete attributes from logs, metrics, and traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.LOGS],
        docsEndpoint: '/pipeline/actions/attributes/deleteattribute',
        docsDescription: 'The “Delete Attribute” Odigos Action can be used to delete attributes from logs, metrics, and traces.',
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
          'The “Rename Attribute” Odigos Action can be used to rename attributes from logs, metrics, and traces. Different instrumentations might use different attribute names for similar information. This action let’s you to consolidate the names across your cluster.',
      },
      {
        id: 'pii-masking',
        type: ACTION_TYPE.PII_MASKING,
        icon: getActionIcon(ACTION_TYPE.PII_MASKING),
        label: 'PII Masking',
        description: 'Mask PII data in your traces.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/attributes/piimasking',
        docsDescription: 'The “PII Masking” Odigos Action can be used to mask PII data from span attribute values.',
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
        docsDescription: 'The “Error Sampler” Odigos Action is a Global Action that supports error sampling by filtering out non-error traces.',
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
          'The “Latency Sampler” Odigos Action is an Endpoint Action that samples traces based on their duration for a specific service and endpoint (HTTP route) filter.',
      },
      {
        id: 'probabilistic-sampler',
        type: ACTION_TYPE.PROBABILISTIC_SAMPLER,
        icon: getActionIcon('sampler'),
        label: 'Probabilistic Sampler',
        description: 'Sample traces based on percentage.',
        allowedSignals: [SIGNAL_TYPE.TRACES],
        docsEndpoint: '/pipeline/actions/sampling/probabilisticsampler',
        docsDescription:
          'The “Probabilistic Sampler” Odigos Action supports probabilistic sampling based on a configured sampling percentage applied to the TraceID.',
      },
    ],
  },
]

export const MOCK_ACTIONS: Action[] = [
  {
    id: 'aci-wlljs',
    type: ACTION_TYPE.ADD_CLUSTER_INFO,
    spec: {
      signals: [SIGNAL_TYPE.LOGS, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.TRACES],
      clusterAttributes: [
        { attributeName: 'key', attributeStringValue: 'val' },
        { attributeName: 'ben', attributeStringValue: 'elferink' },
      ],
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'TransformedToProcessor',
        reason: 'ProcessorCreated',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:50:27Z',
      },
    ],
  },
  {
    id: 'da-gtxsz',
    type: ACTION_TYPE.DELETE_ATTRIBUTES,
    spec: {
      signals: [SIGNAL_TYPE.LOGS, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.TRACES],
      attributeNamesToDelete: ['test', 'dev_only'],
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'TransformedToProcessor',
        reason: 'ProcessorCreated',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:50:44Z',
      },
    ],
  },
  {
    id: 'ra-lrzz8',
    type: ACTION_TYPE.RENAME_ATTRIBUTES,
    spec: {
      signals: [SIGNAL_TYPE.LOGS, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.TRACES],
      renames: { orel: 'otel', oren_telemetry: 'open_telemetry' },
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'TransformedToProcessor',
        reason: 'ProcessorCreated',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:51:20Z',
      },
    ],
  },
  {
    id: 'es-jz6sz',
    type: ACTION_TYPE.ERROR_SAMPLER,
    spec: {
      signals: [SIGNAL_TYPE.TRACES],
      fallbackSamplingRatio: 69,
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'ActionTransformedToProcessorType',
        reason: 'ProcessorCreatedReason',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:52:39Z',
      },
    ],
  },
  {
    id: 'ls-ssdfz',
    type: ACTION_TYPE.LATENCY_SAMPLER,
    spec: {
      signals: [SIGNAL_TYPE.TRACES],
      endpointsFilters: [
        {
          serviceName: 'test',
          httpRoute: '/healthz',
          minimumLatencyThreshold: 69,
          fallbackSamplingRatio: 69,
        },
      ],
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'ActionTransformedToProcessorType',
        reason: 'ProcessorCreatedReason',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:52:55Z',
      },
    ],
  },
  {
    id: 'ps-ksp2t',
    type: ACTION_TYPE.PROBABILISTIC_SAMPLER,
    spec: {
      signals: [SIGNAL_TYPE.TRACES],
      samplingPercentage: 69,
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'TransformedToProcessor',
        reason: 'ProcessorCreated',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:53:24Z',
      },
    ],
  },
  {
    id: 'pi-rqvs2',
    type: ACTION_TYPE.PII_MASKING,
    spec: {
      signals: [SIGNAL_TYPE.TRACES],
      piiCategories: ['CREDIT_CARD'],
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'TransformedToProcessor',
        reason: 'ProcessorCreated',
        message: 'The action has been reconciled to a processor resource.',
        lastTransitionTime: '2025-02-09T08:51:24Z',
      },
    ],
  },
]
