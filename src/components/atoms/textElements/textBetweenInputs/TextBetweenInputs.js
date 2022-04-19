import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TextBetweenInputs = ({ children, ...rest }) => {
    const TextBetweenInputsStyled = useStyle('TextBetweenInputsStyle', Typography)
    return (
        <TextBetweenInputsStyled component={'div'} {...rest}>
            {children}
        </TextBetweenInputsStyled>
    )
}

export default TextBetweenInputs
