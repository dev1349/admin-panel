import ShoppingCartIconStyled from '../../../atoms/icons/shopingCartIcon/ShoppingCartIcon'
import React from 'react'
import TableHeadLastOrders from '../../../molecules/table/tableHeadLastOrders/TableHeadLastOrders'
import Table from '../../../atoms/table/table/Table'
import TableRowLastOrders from '../../../molecules/table/tableRowLastOrders/TableRowLastOrders'
import userOrders from '../../../../mock/lastOrders'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import { useStyle } from '../../../../hooks/useStyle'

const WSLastOrders = () => {
    const TitleTable = useStyle('TitleTableStyle', 'div')
    return (
        <div>
            <TitleTable>
                <ShoppingCartIconStyled/>
                Последние заказы
            </TitleTable>
            <Table>
                <TableHeadLastOrders/>
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
