import React from 'react'
import { TableSortLabel } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSTableSortLabel = props => {
    const TableSortLabelStyled = useStyle('TableSortLabelStyled', TableSortLabel, null)
    return <TableSortLabelStyled {...props} />
}

export default WSTableSortLabel
