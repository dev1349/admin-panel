import React from 'react'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'
import ShoppingIcon from '../../atoms/icons/shopingCartIcon/ShoppingCartIcon'

const WSCountOrders = count => {
    return (
        <div>
            <p>Всего заказов</p>
            <FlexTemplate>
                <ShoppingIcon />
                <span>{count}</span>
            </FlexTemplate>
            <p>Подробности</p>
        </div>
    )
}
export default WSCountOrders
