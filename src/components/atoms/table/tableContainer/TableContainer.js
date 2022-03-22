import React from 'react'
import { styled } from '@mui/material/styles'
import { TableContainer } from '@mui/material'

const TableContainerStyled = styled(TableContainer, {
    name: 'TableContainerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TableContainerAtom = ({ children, ...rest }) => {
    return <TableContainerStyled {...rest}>{children}</TableContainerStyled>
}

export default TableContainerAtom
