import { ENTITY_TYPES, type Metric, type Metrics, type WorkloadId } from '../../@types'

export const getMetricForEntity = (
  metrics: Metrics,
  entityType: ENTITY_TYPES.SOURCE | ENTITY_TYPES.DESTINATION,
  entityId: string | WorkloadId
): Metric => {
  const metric =
    entityType === ENTITY_TYPES.SOURCE
      ? metrics?.sources.find(
          (m) =>
            m.kind === (entityId as WorkloadId).kind && m.name === (entityId as WorkloadId).name && m.namespace === (entityId as WorkloadId).namespace
        )
      : metrics?.destinations.find((m) => m.id === entityId)

  return metric || { throughput: 0 }
}
