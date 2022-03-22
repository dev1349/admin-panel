import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const SimpleButtonStyled = styled(Button, {
    shouldForwardProp: prop => prop !== 'noUppercase',
    name: 'SimpleButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSSimpleButton = ({ children, modalType, ...rest }) => {
    return (
        <SimpleButtonStyled color={modalType} variant={'contained'} {...rest}>
            {children}
        </SimpleButtonStyled>
    )
}

export default WSSimpleButton
