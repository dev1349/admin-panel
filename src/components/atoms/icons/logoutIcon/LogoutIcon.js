import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { createStyled } from '../../../../services/style/createStyled'

const LogoutIconStyled = createStyled('LogoutIconStyle', LogoutIcon)

const LogoutIconWS = props => {
    return <LogoutIconStyled {...props} />
}

export default LogoutIconWS
