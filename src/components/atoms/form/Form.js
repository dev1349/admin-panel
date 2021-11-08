import React from 'react'
import { styled } from '@mui/material'

const FormStyled = styled('form', {
    name: 'FormStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const WSForm = ({ children, ...rest }) => {
    return (
        <FormStyled onSubmit={evt => evt.preventDefault()} {...rest}>
            {children}
        </FormStyled>
    )
}

export default WSForm
