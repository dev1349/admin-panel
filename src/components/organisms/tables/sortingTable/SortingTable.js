import React from 'react'
import TableHead from '../../../molecules/table/tableHead/TableHead'
import TableRow from '../../../molecules/table/tableRow/TableRow'
import Table from '../../../atoms/table/table/Table'
import TableBody from '../../../atoms/table/tableBody/TableBody'

const WSSortingTable = ({
    headerCells,
    tableRows,
    order,
    orderBy,
    onClickSortLabel,
    onCheckRow,
    rowCount,
    selectedRowCount,
    onCheckAll,
    onEditRow,
    isRowChecked,
}) => {
    const headerCellTypes = headerCells.map(cell => cell.numeric)
    return (
        <>
            {rowCount ? (
                <Table>
                    <TableHead
                        headerCells={headerCells}
                        order={order}
                        orderBy={orderBy}
                        onClickSortLabel={onClickSortLabel}
                        rowCount={rowCount}
                        selectedRowCount={selectedRowCount}
                        onCheckAll={onCheckAll}
                    />
                    <TableBody>
                        {tableRows.map(row => (
                            <TableRow
                                rowFields={row}
                                key={row.id}
                                id={row.id}
                                headerCellTypes={headerCellTypes}
                                onCheckRow={onCheckRow}
                                onEditRow={onEditRow}
                                isRowChecked={isRowChecked}
                            />
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <div>Список групп атрибутов пуст</div>
            )}
        </>
    )
}

export default WSSortingTable
