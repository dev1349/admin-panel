import React from 'react'
import { Table } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TableStyled = createStyled('TableStyle', Table, 'dialogTable')

const TableWS = ({ children, ...rest }) => {
    return <TableStyled {...rest}>{children}</TableStyled>
}

export default TableWS
