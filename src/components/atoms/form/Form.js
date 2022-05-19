import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FormStyled = createStyled('FormStyle', 'form')

const WSForm = ({ children, ...rest }) => {
    return (
        <FormStyled onSubmit={evt => evt.preventDefault()} {...rest} noValidate>
            {children}
        </FormStyled>
    )
}

export default WSForm
