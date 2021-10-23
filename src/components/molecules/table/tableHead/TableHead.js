import React from 'react'
import styled from 'styled-components'
import { TableHead, TableRow } from '@mui/material'
import Cell from '../../../atoms/table/tableCell/TableCell'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import TableSortLabel from '../tableSortLabel/TableSortLabel'

const HeadStyled = styled(TableHead)`
    background-color: lightgrey;
    border: 1px solid lightgrey;
`

const MyTableHead = ({
    headCells,
    order,
    orderBy,
    clickTableSortLabel,
    rowCount,
    selectedRowCount,
    clickAllSelectCheckbox,
}) => {
    return (
        <HeadStyled>
            <TableRow>
                <Cell key={'checkbox'} align={'left'} padding="checkbox">
                    <Checkbox
                        indeterminate={
                            selectedRowCount > 0 && selectedRowCount < rowCount
                        }
                        checked={rowCount > 0 && selectedRowCount === rowCount}
                        onChange={clickAllSelectCheckbox}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </Cell>
                {headCells.map(cell => (
                    <Cell
                        key={cell.id}
                        align={cell.numeric ? 'right' : 'left'}
                        padding={cell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === cell.id ? order : false}
                    >
                        {cell.sorting ? (
                            <TableSortLabel
                                active={orderBy === cell.id}
                                direction={orderBy === cell.id ? order : 'asc'}
                                onClick={clickTableSortLabel(cell.id)}
                            >
                                {cell.label}
                            </TableSortLabel>
                        ) : (
                            cell.label
                        )}
                    </Cell>
                ))}
                <Cell key={'action'} align={'center'} padding={'none'}>
                    Действие
                </Cell>
            </TableRow>
        </HeadStyled>
    )
}

export default MyTableHead
