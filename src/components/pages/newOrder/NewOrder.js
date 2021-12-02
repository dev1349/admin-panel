import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import NewOrderTable from '../../organisms/tables/newOrderTable/NewOrderTable'
import {
    changeDeliveryPrice,
    changeDeliveryTypeAndPrice,
    changeGoodCountById,
    changeGoodPriceById,
    deleteGoodById,
    getDeliveryCurrentType,
    getDeliveryPrice,
    getDeliveryTypes,
    getGoodsInOrder,
    getHeaderCells,
    getTotalPrice,
} from '../../../reducers/newOrderSlice'
import { useDispatch, useSelector } from 'react-redux'

const NewOrder = () => {
    const headerCells = useSelector(getHeaderCells)
    const goodsInOrder = useSelector(getGoodsInOrder)
    const deliveryTypes = useSelector(getDeliveryTypes)
    const deliveryPrice = useSelector(getDeliveryPrice)
    const totalPrice = useSelector(getTotalPrice)
    const deliveryCurrentType = useSelector(getDeliveryCurrentType)

    const dispatch = useDispatch()
    const changePrice = id => payload => {
        dispatch(
            changeGoodPriceById({
                id: id,
                price: payload.price,
            })
        )
    }
    const changeCount = id => payload => {
        dispatch(
            changeGoodCountById({
                id: id,
                count: payload.count,
            })
        )
    }
    const deleteCurrentGood = id => () => {
        dispatch(deleteGoodById(id))
    }
    const changeDelivery = payload => {
        dispatch(changeDeliveryTypeAndPrice(payload))
    }
    const changeDeliveryCurrentPrice = payload => {
        dispatch(changeDeliveryPrice(payload))
    }

    return (
        <MaxWidthTemplate>
            <NewOrderTable
                headerCells={headerCells}
                tableRows={goodsInOrder}
                deleteRow={deleteCurrentGood}
                changePrice={changePrice}
                changeCount={changeCount}
                deliveryTypes={deliveryTypes}
                deliveryCurrentType={deliveryCurrentType}
                changeDelivery={changeDelivery}
                changeDeliveryPrice={changeDeliveryCurrentPrice}
                deliveryPrice={deliveryPrice}
                totalPrice={totalPrice}
            />
        </MaxWidthTemplate>
    )
}

export default NewOrder
