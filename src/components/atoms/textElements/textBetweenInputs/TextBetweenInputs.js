import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const TextBetweenInputsStyled = styled(Typography, {
    name: 'TextBetweenInputsStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TextBetweenInputs = ({ children, ...rest }) => {
    return (
        <TextBetweenInputsStyled component={'div'} {...rest}>
            {children}
        </TextBetweenInputsStyled>
    )
}

export default TextBetweenInputs
