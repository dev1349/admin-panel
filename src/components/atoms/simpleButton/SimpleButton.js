import React from 'react'
import { Button } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const WSSimpleButton = ({ children, modalType, ...rest }) => {
    const SimpleButtonStyled = useStyle('SimpleButtonStyle', Button, 'noUppercase')
    return (
        <SimpleButtonStyled color={modalType} variant={'contained'} {...rest}>
            {children}
        </SimpleButtonStyled>
    )
}

export default WSSimpleButton
