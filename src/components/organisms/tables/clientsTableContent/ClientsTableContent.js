import React from 'react'
import ClientsTableRow from '../../../molecules/table/clientsTableRow/ClientsTableRow'

const ClientsTableContent = ({
    clients,
    selectedClients,
    setSelectedClients,
}) => {
    return (
        <>
            {clients.map(client => (
                <ClientsTableRow
                    key={client.id}
                    client={client}
                    selectedClients={selectedClients}
                    setSelectedClients={setSelectedClients}
                />
            ))}
        </>
    )
}

export default ClientsTableContent
