import React from 'react'
import { Button } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const SimpleButtonStyled = createStyled(
    'SimpleButtonStyle',
    Button,
    'noUppercase'
)

const WSSimpleButton = ({ children, modalType, ...rest }) => {
    return (
        <SimpleButtonStyled color={modalType} variant={'contained'} {...rest}>
            {children}
        </SimpleButtonStyled>
    )
}

export default WSSimpleButton
