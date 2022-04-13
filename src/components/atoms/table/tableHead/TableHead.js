import React from 'react'
import { TableHead } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import TableHeadStyle from './TableHeadStyle'


const TableHeadWS = ({ children, ...rest }) => {
    const TableHeadStyled = useStyle('TableHeadStyled', TableHead, TableHeadStyle)
    return <TableHeadStyled {...rest}>{children}</TableHeadStyled>
}

export default TableHeadWS
