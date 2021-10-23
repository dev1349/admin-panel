import React from 'react'
import styled from 'styled-components'
import { TableSortLabel } from '@mui/material'

const TableSortLabelStyled = styled(TableSortLabel)``

const MyTableSortLabel = props => {
    return <TableSortLabelStyled {...props} />
}

export default MyTableSortLabel
