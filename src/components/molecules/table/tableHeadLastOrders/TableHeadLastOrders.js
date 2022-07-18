import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowStyled = createStyled('TableRowStyle', TableRow)
const TableHeadLastOrdersStyled = createStyled('TableHeadLastOrdersStyle', TableHead)

const TableHeadLastOrders = () => {
    // todo Не подключать стили из внешних компонентов

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
