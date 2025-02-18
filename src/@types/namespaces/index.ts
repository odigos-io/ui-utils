import type { Source } from '../sources'

export interface Namespace {
  name: string
  selected: boolean
  sources?: Source[]
}
