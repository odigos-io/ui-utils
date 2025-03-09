import type { Source, WorkloadId } from '../../@types'

export const getWorkloadId = ({ namespace, name, kind }: Source): WorkloadId => {
  return { namespace, name, kind }
}
