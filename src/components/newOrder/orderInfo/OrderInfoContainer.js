import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setCurrentOrderStatus,
    setPayedStatus,
    setCurrentPaymentStatus,
    getCurrentOrderStatus,
    getPaymentTypes,
    getStatusTypes,
    getCurrentPaymentStatus,
    getIsPayed,
} from '../../../reducers/newOrderSlice'
import OrderInfo from '../../organisms/forms/orderInfo/OrderInfo'

const OrderInfoContainer = () => {
    const dispatch = useDispatch()

    const currentOrderStatus = useSelector(getCurrentOrderStatus)
    const currentPaymentStatus = useSelector(getCurrentPaymentStatus)
    const statusTypes = useSelector(getStatusTypes)
    const paymentTypes = useSelector(getPaymentTypes)
    const isPayed = useSelector(getIsPayed)

    const title = 'Информация о заказе'

    function orderStatusHandler(orderStatus) {
        dispatch(setCurrentOrderStatus(orderStatus.name))
    }

    function paymentStatusHandler(paymentStatus) {
        dispatch(setCurrentPaymentStatus(paymentStatus.name))
    }

    function payedStatusHandler(isPayed) {
        dispatch(setPayedStatus(isPayed.checked))
    }

    return (
        <OrderInfo
            title={title.toUpperCase()}
            check={isPayed}
            checkboxHandler={payedStatusHandler}
            orderStatusHandler={orderStatusHandler}
            paymentStatusHandler={paymentStatusHandler}
            autoFocus={true}
            orderStatusItems={statusTypes}
            orderPaymentItems={paymentTypes}
            orderStatusValue={currentOrderStatus}
            orderPaymentValue={currentPaymentStatus}
        />
    )
}

export default OrderInfoContainer
