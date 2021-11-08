import React from 'react'
import { styled } from '@mui/material/styles'
import { TableBody } from '@mui/material'

const TableBodyStyled = styled(TableBody, {
    name: 'TableBodyStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTableBody = ({ children, ...rest }) => {
    return <TableBodyStyled {...rest}>{children}</TableBodyStyled>
}

export default WSTableBody
