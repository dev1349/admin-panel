import React from 'react'
import { styled } from '@mui/material/styles'
import { TableHead } from '@mui/material'

const TableHeadStyled = styled(TableHead, {
    name: 'TableHeadStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TableHeadWS = ({ children, ...rest }) => {
    return <TableHeadStyled {...rest}>{children}</TableHeadStyled>
}

export default TableHeadWS
