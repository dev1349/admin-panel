import React from 'react'
import { styled, Typography } from '@mui/material'

const H2Styled = styled(Typography, {
    name: 'H2Styled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSH2 = ({ children, ...rest }) => {
    return <H2Styled {...rest}>{children}</H2Styled>
}

export default WSH2
