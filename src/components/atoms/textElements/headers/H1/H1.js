import React from 'react'
import { styled, Typography } from '@mui/material'

const H1Styled = styled(Typography, {
    shouldForwardProp: prop => prop !== 'fs',
    name: 'H1Styled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const H1 = ({ children, ...rest }) => {
    return (
        <H1Styled component={'h1'} {...rest}>
            {children}
        </H1Styled>
    )
}

export default H1
