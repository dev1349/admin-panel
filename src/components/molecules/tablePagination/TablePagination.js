import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'
import { styled } from '@mui/material'

export const TablePaginationStyled = styled(TablePagination, {
    name: 'TablePaginationStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TablePaginationWS = () => {
    const [page, setPage] = React.useState(2)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default TablePaginationWS
