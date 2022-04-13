import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import TextBetweenInputsStyle from './TextBetweenInputsStyle'


const TextBetweenInputs = ({ children, ...rest }) => {
    const TextBetweenInputsStyled = useStyle('TextBetweenInputsStyled', Typography, TextBetweenInputsStyle)
    return (
        <TextBetweenInputsStyled component={'div'} {...rest}>
            {children}
        </TextBetweenInputsStyled>
    )
}

export default TextBetweenInputs
