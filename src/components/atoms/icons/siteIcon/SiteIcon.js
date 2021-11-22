import React from 'react'
import { styled } from '@mui/material'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'

const SiteIconStyled = styled(DesktopWindowsIcon, {
    name: 'SiteIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SiteIconWS = props => {
    return <SiteIconStyled {...props} />
}

export default SiteIconWS
