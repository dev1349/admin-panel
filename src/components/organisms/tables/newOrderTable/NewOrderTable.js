import React from 'react'
import Table from '../../../atoms/table/table/Table'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import SimpleTableHead from '../../../molecules/table/simpleTableHead/SimpleTableHead'
import SimpleTableRow from '../../../molecules/table/simpleTableRow/SimpleTableRow'
import SimpleTableFooter from '../../../molecules/table/simpleTableFooter/SimpleTableFooter'
import SimpleTableTotal from '../../../molecules/table/simpleTableTotal/SimpleTableTotal'

const NewOrderTable = ({
    headerCells,
    tableRows,
    deleteRow,
    changePrice,
    changeCount,
    deliveryTypes,
    deliveryCurrentType,
    changeDelivery,
    deliveryPrice,
    changeDeliveryPrice,
    totalPrice,
}) => {
    const cellsTypes = headerCells.map(cell => cell.numeric)
    return (
        <>
            {!tableRows.length && (
                <div>Заказ должен содержать хотя бы одну позицию!!!</div>
            )}
            <Table>
                <SimpleTableHead headerCells={headerCells} />
                <TableBody>
                    {tableRows.map((row, index) => (
                        <SimpleTableRow
                            key={tableRows[index].id}
                            rowFields={row}
                            deleteRow={deleteRow}
                            cellsTypes={cellsTypes}
                            changePrice={changePrice}
                            changeCount={changeCount}
                        />
                    ))}
                    <SimpleTableFooter
                        deliveryTypes={deliveryTypes}
                        deliveryCurrentType={deliveryCurrentType}
                        changeDelivery={changeDelivery}
                        deliveryPrice={deliveryPrice}
                        changeDeliveryPrice={changeDeliveryPrice}
                        disabled={!tableRows.length}
                    />
                    <SimpleTableTotal totalPrice={totalPrice} />
                </TableBody>
            </Table>
        </>
    )
}

export default NewOrderTable
