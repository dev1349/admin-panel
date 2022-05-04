import ShoppingCartIconStyled from '../../../atoms/icons/shopingCartIcon/ShoppingCartIcon'
import { styled } from '@mui/material'
import React from 'react'
import TableHeadLastOrders from '../../../molecules/table/tableHeadLastOrders/TableHeadLastOrders'
import Table from '../../../atoms/table/table/Table'
import TableRowLastOrders from '../../../molecules/table/tableRowLastOrders/TableRowLastOrders'
import userOrders from '../../../../mock/lastOrders'
import TableBody from '../../../atoms/table/tableBody/TableBody'

const TitleTable = styled('div', {
    name: 'LastOrdersTitleStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLastOrders = () => {
    return (
        <div>
            <TitleTable>
                <ShoppingCartIconStyled />
                Последние заказы
            </TitleTable>
            <Table>
                <TableHeadLastOrders />
                <TableBody>
                    {userOrders.map(order => {
                        return (
                            <TableRowLastOrders
                                key={order.orderId}
                                userOrder={order}
                            />
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default WSLastOrders
