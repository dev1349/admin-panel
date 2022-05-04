import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { useStyle } from '../../../../hooks/useStyle'


const SettingsIconWS = props => {
    const SettingsIconStyled = useStyle('SettingsIconStyle', SettingsIcon)
    return <SettingsIconStyled {...props} />
}

export default SettingsIconWS
