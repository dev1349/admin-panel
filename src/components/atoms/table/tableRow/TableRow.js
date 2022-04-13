import React from 'react'
import TableRow from '@mui/material/TableRow'
import { useStyle } from '../../../../hooks/useStyle'
import TableRowStyle from './TableRowStyle'


const WSTableRow = ({ children, ...rest }) => {
    const TableRowStyled = useStyle('TableRowStyled', TableRow, TableRowStyle,
        'default', 'defaultHeading')
    return <TableRowStyled {...rest}>{children}</TableRowStyled>
}

export default WSTableRow
