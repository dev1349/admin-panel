import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'
import { createStyled } from '../../../../services/style/createStyled'

const TablePaginationStyled = createStyled('TablePaginationStyle', TablePagination, 'dialogTablePagination')

const TablePaginationAtom = props => {
    return <TablePaginationStyled {...props} />
}

export default TablePaginationAtom
