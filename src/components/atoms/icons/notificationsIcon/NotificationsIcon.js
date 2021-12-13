import React from 'react'
import { styled } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

const NotificationsIconStyled = styled(NotificationsIcon, {
    name: 'NotificationsIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const NotificationsIconWS = props => {
    return <NotificationsIconStyled {...props} />
}

export default NotificationsIconWS
