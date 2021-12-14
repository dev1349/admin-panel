import React from 'react'
import Table from '../../../atoms/table/table/Table'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import GoodsTableHead from '../../../molecules/table/goodsTableHead/GoodsTableHead'
import GoodsTableRow from '../../../molecules/table/goodsTableRow/GoodsTableRow'

const NewOrderTable = ({ headerCells, tableRows, deleteGood, changeGood }) => {
    const cellsTypes = headerCells.map(cell => cell.numeric)
    return (
        <>
            <Table>
                <GoodsTableHead headerCells={headerCells} />
                <TableBody>
                    {tableRows.map((row, index) => (
                        <GoodsTableRow
                            key={tableRows[index].id}
                            rowValues={row}
                            cellsTypes={cellsTypes}
                            deleteGood={deleteGood}
                            changeGood={changeGood}
                        />
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default NewOrderTable
