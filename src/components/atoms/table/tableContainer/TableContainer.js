import React from 'react'
import { TableContainer } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TableContainerAtom = ({ children, ...rest }) => {
    const TableContainerStyled = useStyle('TableContainerStyle', TableContainer)
    return <TableContainerStyled {...rest}>{children}</TableContainerStyled>
}

export default TableContainerAtom
