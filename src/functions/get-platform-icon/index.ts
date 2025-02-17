import { PLATFORM_TYPE } from '../../@types'
import { K8sLogo, VmLogo, type SVG } from '@odigos/ui-icons'

export const getPlatformIcon = (type: PLATFORM_TYPE) => {
  const LOGOS: Record<PLATFORM_TYPE, SVG> = {
    [PLATFORM_TYPE.K8S]: K8sLogo,
    [PLATFORM_TYPE.VM]: VmLogo,
  }

  return LOGOS[type]
}
