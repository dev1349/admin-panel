import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { createStyled } from '../../../../services/style/createStyled'

const NotificationsIconStyled = createStyled('NotificationsIconStyle', NotificationsIcon)

const NotificationsIconWS = props => {
    return <NotificationsIconStyled {...props} />
}

export default NotificationsIconWS
