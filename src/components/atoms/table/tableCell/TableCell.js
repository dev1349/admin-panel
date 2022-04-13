import React from 'react'
import TableCell from '@mui/material/TableCell'
import { useStyle } from '../../../../hooks/useStyle'
import TableCellStyle from './TableCellStyle'


const WSTableCell = ({ children, ...rest }) => {
    const TableCellStyled = useStyle('TableCellStyled', TableCell, TableCellStyle, 'headCell')
    return <TableCellStyled {...rest}>{children}</TableCellStyled>
}

export default WSTableCell
