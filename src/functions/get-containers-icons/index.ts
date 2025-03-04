import type { Source } from '../../@types'
import { getProgrammingLanguageIcon } from '../get-programming-language-icon'

export const getContainersIcons = (containers: Source['containers']): string[] => {
  const icons = containers?.map(({ language }) => getProgrammingLanguageIcon(language)) || []

  return icons
}
