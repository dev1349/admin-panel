import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'
import TableSortLabel from '../../../atoms/table/tableSortLabel/TableSortLabel'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowStyled = createStyled('TableRowStyle', TableRow)
const TableHeadStyled = createStyled('TableHeadStyle', TableHead)

const WSTableHead = ({ headerCells, order, orderBy, onClickSortLabel, rowCount, selectedRowCount, onCheckAll }) => {
    return (
        <TableHeadStyled>
            <TableRowStyled>
                <TableCell key={'checkbox'} align={'left'} padding="checkbox">
                    <Checkbox
                        indeterminate={selectedRowCount > 0 && selectedRowCount < rowCount}
                        checked={rowCount > 0 && selectedRowCount === rowCount}
                        onChange={onCheckAll}
                        inputProps={{
                            'aria-label': 'selectField all desserts',
                        }}
                    />
                </TableCell>
                {headerCells.map(cell => (
                    <TableCell
                        key={cell.id}
                        align={cell.numeric === undefined ? 'center' : cell.numeric ? 'right' : 'left'}
                        padding={cell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === cell.id ? order : false}
                    >
                        {cell.sorting ? (
                            <TableSortLabel
                                active={orderBy === cell.id}
                                direction={orderBy === cell.id ? order : 'asc'}
                                onClick={onClickSortLabel(cell.id)}
                            >
                                {cell.label}
                            </TableSortLabel>
                        ) : (
                            cell.label
                        )}
                    </TableCell>
                ))}
                <TableCell key={'action'} align={'center'} padding={'none'}>
                    Действие
                </TableCell>
            </TableRowStyled>
        </TableHeadStyled>
    )
}

export default WSTableHead
