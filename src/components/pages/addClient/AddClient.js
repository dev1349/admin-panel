import React from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddClient from '../../organisms/addClient/AddClient'
import { useSelector } from 'react-redux'
import { getCities } from '../../../reducers/newOrderSlice'

const AddClientPage = () => {
    const cities = useSelector(getCities)

    return (
        <MaxWidthTemplate>
            <AddClient cities={cities} />
        </MaxWidthTemplate>
    )
}

export default AddClientPage
