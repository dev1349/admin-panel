import React from 'react'
import { InputLabel } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const InputLabelStyled = createStyled('InputLabelStyle', InputLabel)

const InputLabelAtom = ({ children, ...rest }) => {
    return <InputLabelStyled {...rest}>{children}</InputLabelStyled>
}

export default InputLabelAtom
