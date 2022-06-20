import ShoppingCartIconStyled from '../../../atoms/icons/shoppingCartIcon/ShoppingCartIcon'
import React from 'react'
import TableHeadLastOrders from '../../../molecules/table/tableHeadLastOrders/TableHeadLastOrders'
import Table from '../../../atoms/table/table/Table'
import TableRowLastOrders from '../../../molecules/table/tableRowLastOrders/TableRowLastOrders'
import userOrders from '../../../../mock/lastOrders'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import { createStyled } from '../../../../services/style/createStyled'
import MaxWidthTemplate from '../../../templates/maxWidthTemplate/MaxWidthTemplate'

const TitleTable = createStyled('TitleTableStyle', 'div')

const WSLastOrders = () => {
    return (
        <MaxWidthTemplate>
            <TitleTable>
                <ShoppingCartIconStyled />
                Последние заказы
            </TitleTable>
            <Table>
                <TableHeadLastOrders />
                <TableBody>
                    {userOrders.map(order => {
                        return <TableRowLastOrders key={order.orderId} userOrder={order} />
                    })}
                </TableBody>
            </Table>
        </MaxWidthTemplate>
    )
}

export default WSLastOrders
