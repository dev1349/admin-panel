import React from 'react'
import { styled } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

const LogoutIconStyled = styled(LogoutIcon, {
    name: 'LogoutIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LogoutIconWS = props => {
    return <LogoutIconStyled {...props} />
}

export default LogoutIconWS
