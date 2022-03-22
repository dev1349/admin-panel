import React, { useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import H1 from '../../atoms/textElements/headers/H1/H1'
import AdditionalClientFunctions from '../../organisms/additionalClientFunctions/AdditionalClientsFunctions'
import ClientList from '../../organisms/tables/clientList/ClientList'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAllClients,
    getClientsQuantity,
    getItemsPerPage,
    setItemsPerPage,
} from '../../../reducers/clientsSlice'
import ItemsPerPage from '../../molecules/itemsPerPage/ItemsPerPage'
import Pagination from '../../molecules/pagination/Pagination'

const ClientsPage = () => {
    const clients = useSelector(getAllClients)
    const itemsPerPage = useSelector(getItemsPerPage)
    const clientsQuantity = useSelector(getClientsQuantity)

    const dispatch = useDispatch()
    const handleChangeItemsPerPage = newValue =>
        dispatch(setItemsPerPage(newValue))

    const [selectedClients, setSelectedClients] = useState([])

    const clientIds = clients && clients.map(client => client.id)

    const handleChangeAllSelectedClients = () => {
        if (selectedClients.length === clientIds.length) {
            setSelectedClients([])
        } else {
            setSelectedClients(clientIds)
        }
    }

    const allSelectedClientsIndeterminate =
        clients &&
        selectedClients.length > 0 &&
        selectedClients.length < clientIds?.length
    const allSelectedClientsChecked =
        clients &&
        selectedClients.length > 0 &&
        selectedClients.length === clientIds?.length

    const isSelectedClients = !!selectedClients.length

    return (
        <>
            <MaxWidthTemplate>
                <H1>Все клиенты</H1>
                <AdditionalClientFunctions
                    onChangeAllSelectedClients={handleChangeAllSelectedClients}
                    allSelectedClientsIndeterminate={
                        allSelectedClientsIndeterminate
                    }
                    allSelectedClientsChecked={allSelectedClientsChecked}
                    isSelectedClients={isSelectedClients}
                    createNewClientLink={'/clients/add'}
                    clients={clients}
                />
                <ClientList
                    clients={clients}
                    selectedClients={selectedClients}
                    setSelectedClients={setSelectedClients}
                />
                <ItemsPerPage
                    title={'Показывать на странице:'}
                    buttonValues={[25, 50, 100]}
                    currentValue={itemsPerPage}
                    onChange={handleChangeItemsPerPage}
                />
                {clientsQuantity > itemsPerPage && (
                    <Pagination
                        count={Math.ceil(clientsQuantity / itemsPerPage)}
                        pathName={'/clients/pages'}
                    />
                )}
            </MaxWidthTemplate>
        </>
    )
}

export default ClientsPage
