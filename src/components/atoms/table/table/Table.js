import React from 'react'
import { styled } from '@mui/material/styles'
import { Table } from '@mui/material'

const TableStyled = styled(Table, {
    name: 'TableStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTable = ({ children, ...rest }) => {
    return <TableStyled {...rest}>{children}</TableStyled>
}

export default WSTable
