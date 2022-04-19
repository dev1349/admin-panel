import React from 'react'
import { useStyle } from '../../../hooks/useStyle'

const WSForm = ({ children, ...rest }) => {
    const FormStyled = useStyle('FormStyle', 'form')
    return (
        <FormStyled onSubmit={evt => evt.preventDefault()} {...rest} noValidate>
            {children}
        </FormStyled>
    )
}

export default WSForm
