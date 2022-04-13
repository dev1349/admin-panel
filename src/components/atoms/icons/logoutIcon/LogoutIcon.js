import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { useStyle } from '../../../../hooks/useStyle'


const LogoutIconWS = props => {
    const LogoutIconStyled = useStyle('LogoutIconStyled', LogoutIcon, null)
    return <LogoutIconStyled {...props} />
}

export default LogoutIconWS
