import React from 'react'
import { TableContainer } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TableContainerStyled = createStyled('TableContainerStyle', TableContainer)

const TableContainerAtom = ({ children, ...rest }) => {
    return <TableContainerStyled {...rest}>{children}</TableContainerStyled>
}

export default TableContainerAtom
