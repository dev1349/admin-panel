import React from 'react'
import { TableHead } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TableHeadStyled = createStyled(
    'TableHeadStyle',
    TableHead,
    'dialogTableHead'
)

const TableHeadWS = ({ children, ...rest }) => {
    return <TableHeadStyled {...rest}>{children}</TableHeadStyled>
}

export default TableHeadWS
