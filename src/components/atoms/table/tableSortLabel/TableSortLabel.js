import React from 'react'
import { TableSortLabel } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TableSortLabelStyled = createStyled('TableSortLabelStyle', TableSortLabel, 'dialogSortLabel')

const WSTableSortLabel = props => {
    return <TableSortLabelStyled {...props} />
}

export default WSTableSortLabel
