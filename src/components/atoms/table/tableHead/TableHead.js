import React from 'react'
import { TableHead } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TableHeadWS = ({ children, ...rest }) => {
    const TableHeadStyled = useStyle('TableHeadStyle', TableHead)
    return <TableHeadStyled {...rest}>{children}</TableHeadStyled>
}

export default TableHeadWS
