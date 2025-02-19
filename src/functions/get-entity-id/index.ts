import { type WorkloadId } from '../../@types'

export const getEntityId = (item: Record<string, any>): string | WorkloadId | undefined => {
  if ('ruleId' in item && !!item.ruleId) {
    // Instrumentation Rule
    return item.ruleId
  } else if ('id' in item && !!item.id) {
    // Destination or Action
    return item.id
  } else if ('namespace' in item && !!item.namespace && 'kind' in item && !!item.kind && 'name' in item && !!item.name) {
    // Source
    return {
      namespace: item.namespace,
      name: item.name,
      kind: item.kind,
    }
  }

  console.warn('getEntityId() - cannot get ID of entity:', item)
  return undefined
}
