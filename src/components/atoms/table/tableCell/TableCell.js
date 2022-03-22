import React from 'react'
import { styled } from '@mui/material/styles'
import TableCell from '@mui/material/TableCell'

const TableCellStyled = styled(TableCell, {
    shouldForwardProp: prop => prop !== 'headCell',
    name: 'TableCellStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTableCell = ({ children, ...rest }) => {
    return <TableCellStyled {...rest}>{children}</TableCellStyled>
}

export default WSTableCell
