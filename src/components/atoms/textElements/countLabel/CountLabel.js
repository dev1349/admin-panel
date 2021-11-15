import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const CountLabelStyled = styled(Typography, {
    shouldForwardProp: prop => prop !== 'attention',
    name: 'CountLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSCountLabel = ({ children, ...rest }) => {
    return <CountLabelStyled {...rest}>{children}</CountLabelStyled>
}

export default WSCountLabel
