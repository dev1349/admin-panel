import React from 'react'
import { TableBody } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TableBodyStyled = createStyled('TableBodyStyle', TableBody)

const WSTableBody = ({ children, ...rest }) => {
    return <TableBodyStyled {...rest}>{children}</TableBodyStyled>
}

export default WSTableBody
