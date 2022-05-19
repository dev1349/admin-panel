import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TextBetweenInputsStyled = createStyled(
    'TextBetweenInputsStyle',
    Typography
)

const TextBetweenInputs = ({ children, ...rest }) => {
    return (
        <TextBetweenInputsStyled component={'div'} {...rest}>
            {children}
        </TextBetweenInputsStyled>
    )
}

export default TextBetweenInputs
