import { CheckCircledIcon, ErrorTriangleIcon, InfoIcon, OdigosLogo, type SVG, WarningTriangleIcon } from '@odigos/ui-icons'
import { useTheme } from 'styled-components'
import { NOTIFICATION_TYPE } from '../../@types'

export const getStatusIcon = (type: NOTIFICATION_TYPE) => {
  const theme = useTheme()

  const LOGOS: Record<NOTIFICATION_TYPE, SVG> = {
    [NOTIFICATION_TYPE.SUCCESS]: (props) => CheckCircledIcon({ fill: theme.text[type], ...props }),
    [NOTIFICATION_TYPE.ERROR]: (props) => ErrorTriangleIcon({ fill: theme.text[type], ...props }),
    [NOTIFICATION_TYPE.WARNING]: (props) => WarningTriangleIcon({ fill: theme.text[type], ...props }),
    [NOTIFICATION_TYPE.INFO]: (props) => InfoIcon({ fill: theme.text[type], ...props }),
    [NOTIFICATION_TYPE.DEFAULT]: (props) => OdigosLogo({ fill: theme.text[type], ...props }),
  }

  return LOGOS[type]
}
