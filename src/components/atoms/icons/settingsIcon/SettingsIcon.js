import React from 'react'
import { styled } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

const SettingsIconStyled = styled(SettingsIcon, {
    name: 'SettingsIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SettingsIconWS = props => {
    return <SettingsIconStyled {...props} />
}

export default SettingsIconWS
