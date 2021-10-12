import { createSelector, createSlice } from '@reduxjs/toolkit'
import mockCoupons, {
    currentCoupon,
} from '../components/couponsList/mockCoupons'

export const couponsSlice = createSlice({
    name: 'coupons',
    initialState: {
        viewMode: 'list',
        couponsList: mockCoupons,
        sortedBy: {},
        currentCoupon: currentCoupon,
        error: false,
    },
    reducers: {
        changeSortingStatus(state, action) {
            state.sortedBy = action.payload
        },
        sortingCouponsList(state, action) {
            const { name, sortingStatus } = action.payload
            switch (sortingStatus) {
                case 'down':
                    state.couponsList.sort((a, b) => {
                        if (a[name] > b[name]) {
                            return 1
                        }
                        if (a[name] < b[name]) {
                            return -1
                        }
                        return 0
                    })
                    break
                case 'up':
                    state.couponsList.sort((a, b) => {
                        if (a[name] < b[name]) {
                            return 1
                        }
                        if (a[name] > b[name]) {
                            return -1
                        }
                        return 0
                    })
                    break
                default:
                    break
            }
        },
        changeViewMode(state, action) {
            state.viewMode = action.payload
        },
        changeCurrentCoupon(state, action) {
            state.currentCoupon = state.couponsList.find(
                el => el.id === action.payload
            )
        },
        resetCurrentCoupon(state) {
            state.currentCoupon = currentCoupon
        },
        addNewCoupon(state, action) {
            state.couponsList.push(action.payload)
        },
        saveChangedCoupon(state, action) {
            const { couponIndex, coupon } = action.payload
            state.couponsList[couponIndex] = coupon
        },
        changeCouponId(state, action) {
            state.currentCoupon.id = action.payload
        },
        changeCouponName(state, action) {
            state.currentCoupon.name = action.payload
        },
        changeCouponCode(state, action) {
            state.currentCoupon.code = action.payload
        },
        changeCouponDiscountType(state, action) {
            state.currentCoupon.discount.type = action.payload
        },
        changeCouponDiscountValue(state, action) {
            state.currentCoupon.discount.value = action.payload
        },
        changeCouponTotalSum(state, action) {
            state.currentCoupon.totalSum = action.payload
        },
        changeCouponAuthUser(state, action) {
            state.currentCoupon.authUser = action.payload
        },
        changeCouponGood(state, action) {
            state.currentCoupon.good = action.payload
        },
        changeCouponGoodCategory(state, action) {
            state.currentCoupon.goodCategory = action.payload
        },
        changeCouponStartDate(state, action) {
            state.currentCoupon.startDate = action.payload
        },
        changeCouponEndDate(state, action) {
            state.currentCoupon.endDate = action.payload
        },
        changeCouponUseCount(state, action) {
            state.currentCoupon.useCount = action.payload
        },
        changeCouponUseOneClientCount(state, action) {
            state.currentCoupon.useOneClientCount = action.payload
        },
        changeCouponStatus(state, action) {
            state.currentCoupon.status = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        },
    },
})

export const {
    changeSortingStatus,
    sortingCouponsList,
    changeViewMode,
    changeCurrentCoupon,
    resetCurrentCoupon,
    addNewCoupon,
    saveChangedCoupon,
    changeCouponId,
    changeCouponName,
    changeCouponCode,
    changeCouponDiscountType,
    changeCouponDiscountValue,
    changeCouponTotalSum,
    changeCouponAuthUser,
    changeCouponGood,
    changeCouponGoodCategory,
    changeCouponStartDate,
    changeCouponEndDate,
    changeCouponUseCount,
    changeCouponUseOneClientCount,
    changeCouponStatus,
    setError,
} = couponsSlice.actions

export default couponsSlice.reducer

export const sortingCoupons = (name, newSortingStatus) => dispatch => {
    dispatch(
        changeSortingStatus({
            [name]: newSortingStatus,
        })
    )
    dispatch(
        sortingCouponsList({
            name,
            sortingStatus: newSortingStatus,
        })
    )
}

export const getAllCoupons = state => state.coupons.couponsList
export const getCurrentCoupons = id => state =>
    state.coupons.couponsList.find(el => el.id === id)
export const getError = state => state.coupons.error
export const getCurrentCouponId = state => state.coupons.currentCoupon.id
export const getViewMode = state => state.coupons.viewMode
export const getCurrentCoupon = state => state.coupons.currentCoupon
export const getSortingStatus = name =>
    createSelector(
        state => state.coupons.sortedBy,
        sortedBy => {
            if (sortedBy[name]) {
                return sortedBy[name]
            }
            return 'none'
        }
    )

export const changeDiscountValue = value => (dispatch, getState) => {
    const discountType = getState().coupons.currentCoupon.discount.type

    if (discountType === 'percent') {
        if (parseFloat(value) > 100) {
            return
        }
    }
    dispatch(changeCouponDiscountValue(value))
}

export const goToListMode = () => dispatch => {
    dispatch(changeViewMode('list'))
    dispatch(resetCurrentCoupon())
}

export const goToEditMode = (viewMode, id) => (dispatch, getState) => {
    dispatch(changeViewMode(viewMode))

    if (viewMode === 'add') {
        const newCouponId =
            Math.max(
                ...getState().coupons.couponsList.map(coupon => coupon.id)
            ) + 1
        dispatch(changeCouponId(newCouponId))
        return
    }

    if (viewMode === 'edit') {
        dispatch(changeCurrentCoupon(id))
    }
}

export const saveCoupon = () => (dispatch, getState) => {
    const viewMode = getState().coupons.viewMode
    let coupon = getState().coupons.currentCoupon

    if (!coupon.name || !coupon.code) {
        dispatch(setError(true))
        return
    }

    let discountValue = getState().coupons.currentCoupon.discount.value
    discountValue = discountValue === null ? null : parseFloat(discountValue)
    dispatch(changeCouponDiscountValue(discountValue))

    let totalSum = getState().coupons.currentCoupon.totalSum
    totalSum = totalSum === null ? null : parseFloat(totalSum)
    dispatch(changeCouponTotalSum(totalSum))

    if (viewMode === 'add') {
        coupon = getState().coupons.currentCoupon
        dispatch(addNewCoupon(coupon))
    }

    if (viewMode === 'edit') {
        const id = getState().coupons.currentCoupon.id
        const couponIndex = getState().coupons.couponsList.findIndex(
            coupon => coupon.id === id
        )
        coupon = getState().coupons.currentCoupon
        dispatch(
            saveChangedCoupon({
                couponIndex,
                coupon,
            })
        )
    }

    dispatch(changeViewMode('list'))
    dispatch(resetCurrentCoupon())
}

export const changeDiscountType = value => dispatch => {
    dispatch(changeCouponDiscountType(value))
    dispatch(changeCouponDiscountValue(null))
}
