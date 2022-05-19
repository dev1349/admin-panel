import React from 'react'
import Switch from '@mui/material/Switch'
import { createStyled } from '../../../../services/style/createStyled'

const SwitchStyled = createStyled('SwitchStyle', Switch, 'dialogSwitch')

const SwitchAtom = props => {
    return <SwitchStyled {...props} />
}

export default SwitchAtom
