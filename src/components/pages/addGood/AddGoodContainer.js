import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postGood } from '../../../reducers/goodsSlice'
import { allGoodType, getAllGoodType } from '../../../reducers/goodTypeSlice'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddGood from '../../organisms/forms/addGood/AddGood'

const AddGoodContainer = () => {
    const [values, setValues] = useState({})

    const allGoodTypes = useSelector(allGoodType)

    const dispatch = useDispatch()

    const addGood = good => {
        good && dispatch(postGood(good))
    }

    useEffect(() => {
        const getAllGoodTypes = () => {
            dispatch(getAllGoodType())
        }
        getAllGoodTypes()
    }, [dispatch])

    const handleChange = payload => {
        setValues({
            ...values,
            ...payload,
        })
    }

    const handleChangeSelect = event => {
        setValues({
            ...values,
            goodType: allGoodTypes[event.target.value],
        })
    }

    const handleSubmit = () => {
        addGood(values)
    }

    return (
        <MaxWidthTemplate>
            {allGoodTypes ? (
                <AddGood
                    allGoodType={allGoodTypes}
                    handleChange={handleChange}
                    handleChangeSelect={handleChangeSelect}
                    handleSubmit={handleSubmit}
                    values={values}
                />
            ) : (
                <div />
            )}
        </MaxWidthTemplate>
    )
}

export default AddGoodContainer
