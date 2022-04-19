import React from 'react'
import { TableBody } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSTableBody = ({ children, ...rest }) => {
    const TableBodyStyled = useStyle('TableBodyStyle', TableBody)
    return <TableBodyStyled {...rest}>{children}</TableBodyStyled>
}

export default WSTableBody
