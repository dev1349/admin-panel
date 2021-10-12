import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postGood } from '../../reducers/goodsSlice'
import { AddGood } from './AddGood'
import { allGoodType, getAllGoodType } from '../../reducers/goodTypeSlice'

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

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
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

    return allGoodTypes ? (
        <AddGood
            allGoodType={allGoodTypes}
            handleChange={handleChange}
            handleChangeSelect={handleChangeSelect}
            handleSubmit={handleSubmit}
        />
    ) : (
        <div />
    )
}

export default AddGoodContainer
