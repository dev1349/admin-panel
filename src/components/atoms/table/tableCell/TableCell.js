import React from 'react'
import TableCell from '@mui/material/TableCell'
import { createStyled } from '../../../../services/style/createStyled'

const TableCellStyled = createStyled('TableCellStyle', TableCell, ['headCell', 'dialogCell', 'dialogHeadCell', 'dialogButtonCell'])

const WSTableCell = ({ children, ...rest }) => {
    return <TableCellStyled {...rest}>{children}</TableCellStyled>
}

export default WSTableCell
