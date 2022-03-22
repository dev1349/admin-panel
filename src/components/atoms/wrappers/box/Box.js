import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const BoxStyled = styled(Box, {
    name: 'BoxStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const BoxWS = ({ children, ...rest }) => {
    return <BoxStyled {...rest}>{children}</BoxStyled>
}

export default BoxWS
