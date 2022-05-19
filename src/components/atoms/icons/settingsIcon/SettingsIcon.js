import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import { createStyled } from '../../../../services/style/createStyled'

const SettingsIconStyled = createStyled('SettingsIconStyle', SettingsIcon)

const SettingsIconWS = props => {
    return <SettingsIconStyled {...props} />
}

export default SettingsIconWS
