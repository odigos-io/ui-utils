import { CONDITION_STATUS, type FetchedCondition, type Destination } from '../../@types'

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'odigos.io.dest.jaeger-p6cxs',
    name: '',
    fields: '{"JAEGER_TLS_ENABLED":"false","JAEGER_URL":"jaeger.tracing:4317"}',
    exportedSignals: {
      logs: false,
      metrics: false,
      traces: true,
    },
    destinationType: {
      type: 'jaeger',
      imageUrl: 'https:/d15jtxgb40qetw.cloudfront.net/jaeger.svg',
      displayName: 'Jaeger',
      supportedSignals: {
        logs: {
          supported: false,
        },
        metrics: {
          supported: false,
        },
        traces: {
          supported: true,
        },
      },
    },
    conditions: [
      {
        type: 'DestinationConfigured',
        status: CONDITION_STATUS.TRUE,
        message: 'Destination successfully transformed to otelcol configuration',
      } as FetchedCondition,
    ],
  },
]
