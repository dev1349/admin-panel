import React from 'react'
import TableRow from '@mui/material/TableRow'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowStyled = createStyled('TableRowStyle', TableRow, ['default', 'defaultHeading', 'dialogRow', 'dialogSelectedRow'])

const WSTableRow = ({ children, ...rest }) => {
    return <TableRowStyled {...rest}>{children}</TableRowStyled>
}

export default WSTableRow
