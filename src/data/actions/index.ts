import { type Action, ACTION_TYPE, SIGNAL_TYPE, CONDITION_STATUS } from '../../@types'

export const MOCK_ACTIONS: Action[] = [
  {
    id: 'ka-9g5rp',
    type: ACTION_TYPE.K8S_ATTRIBUTES,
    spec: {
      signals: [SIGNAL_TYPE.LOGS, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.TRACES],
      collectContainerAttributes: true,
      collectWorkloadId: true,
      collectClusterId: true,
      labelsAttributes: [
        { labelKey: 'pod-template-hash', attributeKey: 'template_hash' },
        { labelKey: 'app', attributeKey: 'application' },
      ],
      annotationsAttributes: [
        { annotationKey: 'kubectl.kubernetes.io/createdAt', attributeKey: 'created_at' },
        { annotationKey: 'kubectl.kubernetes.io/restartedAt', attributeKey: 'restarted_at' },
      ],
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
    },
    conditions: [
      {
        status: CONDITION_STATUS.TRUE,
        type: 'ActionTransformedToProcessorType',
        reason: 'ProcessorCreated',
        message: 'The action successfully transformed to a unified processor',
        lastTransitionTime: '2025-02-11T08:20:03Z',
      },
    ],
  },
  {
    id: 'aci-wlljs',
    type: ACTION_TYPE.ADD_CLUSTER_INFO,
    spec: {
      signals: [SIGNAL_TYPE.LOGS, SIGNAL_TYPE.METRICS, SIGNAL_TYPE.TRACES],
      clusterAttributes: [
        { attributeName: 'key', attributeStringValue: 'val' },
        { attributeName: 'ben', attributeStringValue: 'elferink' },
      ],
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper finibus augue id aliquet. Nullam suscipit ultricies risus. Cras ante ex, interdum ac arcu ut, tincidunt sodales magna. Suspendisse potenti. Duis quis pulvinar turpis. Etiam pretium dui vitae euismod rutrum. Integer sodales diam a odio tincidunt tempus. Cras sit amet semper magna. In sed purus volutpat lacus gravida mattis. Aliquam et nunc felis.',
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
