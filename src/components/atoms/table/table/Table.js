import React from 'react'
import { Table } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TableWS = ({ children, ...rest }) => {
    const TableStyled = useStyle('TableStyled', Table, null)
    return <TableStyled {...rest}>{children}</TableStyled>
}

export default TableWS
