import React from 'react'
import { styled, Typography } from '@mui/material'

const H3Styled = styled(Typography, {
    name: 'H3Styled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const H3 = ({ children, ...rest }) => {
    return <H3Styled {...rest}>{children}</H3Styled>
}

export default H3
