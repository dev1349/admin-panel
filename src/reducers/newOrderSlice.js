import { createSelector, createSlice } from '@reduxjs/toolkit'
import initialState from '../mock/newOrderInitialState'

const newOrderSlice = createSlice({
    name: 'newOrder',
    initialState,
    reducers: {
        changeGoodPrice(state, action) {
            state.goodsInOrder[action.payload.index].price =
                action.payload.price
        },
        changeGoodCount(state, action) {
            state.goodsInOrder[action.payload.index].count =
                action.payload.count
        },
        deleteGood(state, action) {
            state.goodsInOrder.splice(action.payload, 1)
        },
        changeDeliveryType(state, action) {
            state.delivery.currentType = action.payload.deliveryCurrentType
        },
        changeDeliveryPrice(state, action) {
            state.delivery.price = action.payload.deliveryPrice
        },
        changeClientFields(state, action) {
            state.fields = { ...state.fields, ...action.payload }
        },
        changeClientDeliveryDateTime(state, action) {
            state.fields.clientDeliveryDateTime = {
                ...state.fields.clientDeliveryDateTime,
                ...action.payload,
            }
        },
        setCurrentOrderStatus(state, action) {
            state.currentOrderStatus = action.payload
        },
        setCurrentPaymentStatus(state, action) {
            state.currentPaymentStatus = action.payload
        },
        setPayedStatus(state, action) {
            state.isPayed = action.payload
        },
    },
})

export const {
    changeGoodPrice,
    changeGoodCount,
    deleteGood,
    changeDeliveryType,
    changeDeliveryPrice,
    changeClientFields,
    changeClientDeliveryDateTime,
    setCurrentOrderStatus,
    setCurrentPaymentStatus,
    setPayedStatus,
} = newOrderSlice.actions

export default newOrderSlice.reducer

export const deleteGoodById = id => (dispatch, getState) => {
    const goodIndex = getState().newOrder.goodsInOrder.findIndex(
        good => good.id === id
    )
    dispatch(deleteGood(goodIndex))
    const rowCount = getState().newOrder.goodsInOrder.length
    if (!rowCount) {
        dispatch(
            changeDeliveryType({
                deliveryCurrentType: initialState.delivery.currentType,
            })
        )
        dispatch(changeDeliveryPrice({ deliveryPrice: null }))
    }
}
export const changeGoodPriceById = payload => (dispatch, getState) => {
    const goodIndex = getState().newOrder.goodsInOrder.findIndex(
        good => good.id === payload.id
    )
    dispatch(changeGoodPrice({ index: goodIndex, price: payload.price }))
}
export const changeGoodCountById = payload => (dispatch, getState) => {
    if (payload.count === 0 || payload.count === null) {
        dispatch(deleteGoodById(payload.id))
        return
    }
    const goodIndex = getState().newOrder.goodsInOrder.findIndex(
        good => good.id === payload.id
    )
    dispatch(changeGoodCount({ index: goodIndex, count: payload.count }))
}

export const getHeaderCells = state => state.newOrder.headerCells
export const getGoodsInOrder = state => state.newOrder.goodsInOrder
export const getDeliveryPrice = state => state.newOrder.delivery.price
export const getDeliveryTypes = state => state.newOrder.delivery.types
export const getTotalPrice = createSelector(
    state =>
        state.newOrder.goodsInOrder.reduce(
            (total, currentGoods) =>
                total + currentGoods.price * currentGoods.count,
            0
        ),
    state => state.newOrder.delivery.price,
    (totalGoodsPrice, deliveryPrice) => {
        if (deliveryPrice) {
            return (
                parseFloat(totalGoodsPrice) + parseFloat(deliveryPrice)
            ).toFixed(2)
        }
        return parseFloat(totalGoodsPrice).toFixed(2)
    }
)
export const getDeliveryCurrentType = state =>
    state.newOrder.delivery.currentType
export const getClientFields = state => state.newOrder.fields
export const getHadDelivery = state => state.newOrder.fields.hasDelivery
export const getCities = state => state.newOrder.cities
export const getCurrentOrderStatus = state => state.newOrder.currentOrderStatus
export const getCurrentPaymentStatus = state =>
    state.newOrder.currentPaymentStatus
export const getStatusTypes = state => state.newOrder.statusTypes
export const getPaymentTypes = state => state.newOrder.paymentTypes
export const getIsPayed = state => state.newOrder.isPayed
