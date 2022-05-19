import React from 'react'
import { Button } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const ButtonStyled = createStyled('ButtonStyle', Button, 'dialogButton')

const ButtonAtom = ({ children, ...rest }) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default ButtonAtom
