import React from 'react'
import { styled } from '@mui/material'
import { TableSortLabel } from '@mui/material'

const TableSortLabelStyled = styled(TableSortLabel, {
    name: 'TableSortLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTableSortLabel = props => {
    return <TableSortLabelStyled {...props} />
}

export default WSTableSortLabel
