import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FormStyle from './FormStyle'


const WSForm = ({ children, ...rest }) => {
    const FormStyled = useStyle('FormStyled', 'form', FormStyle)
    return (
        <FormStyled onSubmit={evt => evt.preventDefault()} {...rest} noValidate>
            {children}
        </FormStyled>
    )
}

export default WSForm
