import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const CellContentStyled = styled(Box, {
    name: 'CellContentStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const CellContent = ({ children, ...rest }) => {
    return (
        <CellContentStyled component={'span'} {...rest}>
            {children}
        </CellContentStyled>
    )
}

export default CellContent
