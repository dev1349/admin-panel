import React from 'react'
import AddClient from '../../organisms/addClient/AddClient'
import { useSelector } from 'react-redux'
import { getCities } from '../../../reducers/newOrderSlice'

const AddClientPage = () => {
    const cities = useSelector(getCities)

    return <AddClient cities={cities} />
}

export default AddClientPage
