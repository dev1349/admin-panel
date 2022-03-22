import React from 'react'
import Table from '../../../atoms/table/table/Table'
import TableContainer from '../../../atoms/table/tableContainer/TableContainer'
import ClientsTableHead from '../clientsTableHead/ClientsTableHead'
import TableBody from '../../../atoms/table/tableBody/TableBody'
import ClientsTableContent from '../clientsTableContent/ClientsTableContent'

const ClientList = ({ clients, selectedClients, setSelectedClients }) => {
    return (
        <TableContainer>
            <Table>
                <ClientsTableHead />
                <TableBody>
                    <ClientsTableContent
                        clients={clients}
                        selectedClients={selectedClients}
                        setSelectedClients={setSelectedClients}
                    />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ClientList
