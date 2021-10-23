import React from 'react'
import styled from 'styled-components'
import { InputLabel } from '@mui/material'

const InputLabelStyled = styled(InputLabel)``

const MyInputLabel = ({ children, ...rest }) => {
    return <InputLabelStyled {...rest}>{children}</InputLabelStyled>
}

export default MyInputLabel
