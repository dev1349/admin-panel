import React from 'react'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import { createStyled } from '../../../../services/style/createStyled'

const SiteIconStyled = createStyled('SiteIconStyle', DesktopWindowsIcon)

const SiteIconWS = props => {
    return <SiteIconStyled {...props} />
}

export default SiteIconWS
