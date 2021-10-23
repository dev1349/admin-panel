import React from 'react'
import styled from 'styled-components'
import { Table, TableBody } from '@mui/material'
import TableHead from '../../../molecules/table/tableHead/TableHead'
import TableRow from '../../../molecules/table/tableRow/TableRow'

const TableStyled = styled(Table)``
const TableBodyStyled = styled(TableBody)``

const MySortingTable = ({
    headCells,
    tableRows,
    order,
    orderBy,
    clickTableSortLabel,
    checkAttributeGroup,
    rowCount,
    selectedRowCount,
    clickAllSelectCheckbox,
    clickEditAttributeGroup,
    isAttributeGroupChecked,
}) => {
    const isHeadCellsNumeric = headCells.map(cell => cell.numeric)
    return (
        <>
            {rowCount ? (
                <TableStyled>
                    <TableHead
                        headCells={headCells}
                        order={order}
                        orderBy={orderBy}
                        clickTableSortLabel={clickTableSortLabel}
                        rowCount={rowCount}
                        selectedRowCount={selectedRowCount}
                        clickAllSelectCheckbox={clickAllSelectCheckbox}
                    />
                    <TableBodyStyled>
                        {tableRows.map(row => (
                            <TableRow
                                rowFields={row}
                                key={row.id}
                                id={row.id}
                                isHeadCellsNumeric={isHeadCellsNumeric}
                                checkAttributeGroup={checkAttributeGroup}
                                clickEditAttributeGroup={
                                    clickEditAttributeGroup
                                }
                                isAttributeGroupChecked={
                                    isAttributeGroupChecked
                                }
                            />
                        ))}
                    </TableBodyStyled>
                </TableStyled>
            ) : (
                <div>Список групп атрибутов пуст</div>
            )}
        </>
    )
}

export default MySortingTable
