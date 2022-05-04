import React from 'react'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import { useStyle } from '../../../../hooks/useStyle'


const SiteIconWS = props => {
    const SiteIconStyled = useStyle('SiteIconStyle', DesktopWindowsIcon)
    return <SiteIconStyled {...props} />
}

export default SiteIconWS
