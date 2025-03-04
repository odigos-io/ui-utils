import type { WorkloadId } from '../sources'

export interface Metric {
  throughput: number
}

export interface Metrics {
  sources: (Metric & WorkloadId)[]
  destinations: (Metric & { id: string })[]
}
