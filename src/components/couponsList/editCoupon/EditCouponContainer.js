import React from 'react'
import EditCoupon from './EditCoupon'
import {useDispatch, useSelector} from 'react-redux'
import {
    changeCouponAuthUser,
    changeCouponCode,
    changeCouponEndDate,
    changeCouponGood,
    changeCouponGoodCategory,
    changeCouponName,
    changeCouponStartDate,
    changeCouponStatus,
    changeCouponTotalSum,
    changeCouponUseCount,
    changeCouponUseOneClientCount,
    changeDiscountType,
    changeDiscountValue,
    getCurrentCoupon
} from '../../../reducers/couponsSlice'


const EditCouponContainer = () => {
    const currentCoupon = useSelector(getCurrentCoupon)
    const dispatch = useDispatch()
    const changeCouponNameHandler = (value) => {
        dispatch(changeCouponName(value))
    }
    const changeCouponCodeHandler = (value) => {
        dispatch(changeCouponCode(value))
    }
    const changeCouponDiscountTypeHandler = (value) => {
        dispatch(changeDiscountType(value))
    }
    const changeCouponDiscountValueHandler = (value) => {
        dispatch(changeDiscountValue(value))
    }
    const changeCouponTotalSumHandler = (value) => {
        dispatch(changeCouponTotalSum(value))
    }
    const changeCouponAuthUserHandler = (value) => {
        dispatch(changeCouponAuthUser(value))
    }
    const changeCouponGoodHandler = (value) => {
        dispatch(changeCouponGood(value))
    }
    const changeCouponGoodCategoryHandler = (value) => {
        dispatch(changeCouponGoodCategory(value))
    }
    const changeCouponStartDateHandler = (value) => {
        dispatch(changeCouponStartDate(value))
    }
    const changeCouponEndDateHandler = (value) => {
        dispatch(changeCouponEndDate(value))
    }
    const changeCouponUseCountHandler = (value) => {
        dispatch(changeCouponUseCount(value))
    }
    const changeCouponUseOneClientCountHandler = (value) => {
        dispatch(changeCouponUseOneClientCount(value))
    }
    const changeCouponStatusHandler = (value) => {
        dispatch(changeCouponStatus(value))
    }

    return (
        <EditCoupon
            currentCoupon={currentCoupon}
            changeCouponName={changeCouponNameHandler}
            changeCouponCode={changeCouponCodeHandler}
            changeCouponDiscountType={changeCouponDiscountTypeHandler}
            changeCouponDiscountValue={changeCouponDiscountValueHandler}
            changeCouponTotalSum={changeCouponTotalSumHandler}
            changeCouponAuthUser={changeCouponAuthUserHandler}
            changeCouponGood={changeCouponGoodHandler}
            changeCouponGoodCategory={changeCouponGoodCategoryHandler}
            changeCouponStartDate={changeCouponStartDateHandler}
            changeCouponEndDate={changeCouponEndDateHandler}
            changeCouponUseCount={changeCouponUseCountHandler}
            changeCouponUseOneClientCount={changeCouponUseOneClientCountHandler}
            changeCouponStatus={changeCouponStatusHandler}
        />
    )
}


export default EditCouponContainer