import React from 'react'
import { styled } from '@mui/material/styles'
import TableRow from '@mui/material/TableRow'

const TableRowStyled = styled(TableRow, {
    shouldForwardProp: prop => prop !== 'default' && prop !== 'defaultHeading',
    name: 'TableRowStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTableRow = ({ children, ...rest }) => {
    return <TableRowStyled {...rest}>{children}</TableRowStyled>
}

export default WSTableRow
