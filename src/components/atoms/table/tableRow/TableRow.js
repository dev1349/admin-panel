import React from 'react'
import TableRow from '@mui/material/TableRow'
import { useStyle } from '../../../../hooks/useStyle'


const WSTableRow = ({ children, ...rest }) => {
    const TableRowStyled = useStyle('TableRowStyle', TableRow,
        'default', 'defaultHeading')
    return <TableRowStyled {...rest}>{children}</TableRowStyled>
}

export default WSTableRow
