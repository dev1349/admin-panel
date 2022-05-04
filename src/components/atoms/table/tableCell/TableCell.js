import React from 'react'
import TableCell from '@mui/material/TableCell'
import { useStyle } from '../../../../hooks/useStyle'


const WSTableCell = ({ children, ...rest }) => {
    const TableCellStyled = useStyle('TableCellStyle', TableCell, 'headCell')
    return <TableCellStyled {...rest}>{children}</TableCellStyled>
}

export default WSTableCell
