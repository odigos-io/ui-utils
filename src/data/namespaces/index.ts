import { type Namespace } from '../../@types'
import { MOCK_SOURCE_JAEGER, MOCK_SOURCES } from '../sources'

export const MOCK_NAMESPACES: Namespace[] = [
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
    sources: [MOCK_SOURCE_JAEGER],
  },
]
