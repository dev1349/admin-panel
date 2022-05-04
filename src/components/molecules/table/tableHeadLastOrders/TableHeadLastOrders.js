import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { useStyle } from '../../../../hooks/useStyle'


const TableHeadLastOrders = () => {
    // todo Не подключать стили из внешних компонентов
    const TableRowStyled = useStyle('TableRowStyle', TableRow)
    const TableHeadLastOrdersStyled = useStyle('TableHeadLastOrdersStyle', TableHead)
    return (
        <TableHeadLastOrdersStyled>
            <TableRowStyled>
                <TableCell key={'idOrder'} align={'left'} padding="normal">
                    Заказ №
                </TableCell>

                <TableCell key={'buyer'} align={'left'} padding="normal">
                    Покупатель
                </TableCell>

                <TableCell key={'status'} align={'left'} padding="normal">
                    Статус
                </TableCell>

                <TableCell key={'date'} align={'left'} padding="normal">
                    Дата заказа
                </TableCell>

                <TableCell key={'sum'} align={'left'} padding="normal">
                    На сумму
                </TableCell>
                <TableCell key={'action'} align={'left'} padding={'normal'}>
                    Действие
                </TableCell>
            </TableRowStyled>
        </TableHeadLastOrdersStyled>
    )
}

export default TableHeadLastOrders
