import React from 'react'
import { Button } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import SimpleButtonStyle from './SimpleButtonStyle'


const WSSimpleButton = ({ children, modalType, ...rest }) => {
    const SimpleButtonStyled = useStyle('SimpleButtonStyled', Button, SimpleButtonStyle, 'noUppercase')
    return (
        <SimpleButtonStyled color={modalType} variant={'contained'} {...rest}>
            {children}
        </SimpleButtonStyled>
    )
}

export default WSSimpleButton
