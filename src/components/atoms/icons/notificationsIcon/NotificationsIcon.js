import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useStyle } from '../../../../hooks/useStyle'


const NotificationsIconWS = props => {
    const NotificationsIconStyled = useStyle('NotificationsIconStyle', NotificationsIcon)
    return <NotificationsIconStyled {...props} />
}

export default NotificationsIconWS
