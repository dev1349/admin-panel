import React from 'react'
import { InputLabel } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSInputLabel = ({ children, ...rest }) => {
    const InputLabelStyled = useStyle('InputLabelStyled', InputLabel, null)
    return <InputLabelStyled {...rest}>{children}</InputLabelStyled>
}

export default WSInputLabel
