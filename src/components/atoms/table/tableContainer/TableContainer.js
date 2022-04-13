import React from 'react'
import { TableContainer } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TableContainerAtom = ({ children, ...rest }) => {
    const TableContainerStyled = useStyle('TableContainerStyled', TableContainer, null)
    return <TableContainerStyled {...rest}>{children}</TableContainerStyled>
}

export default TableContainerAtom
