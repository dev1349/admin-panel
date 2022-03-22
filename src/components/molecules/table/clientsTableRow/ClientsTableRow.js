import React from 'react'
import TableRow from '../../../atoms/table/tableRow/TableRow'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import Checkbox from '../../../atoms/inputs/checkbox/Checkbox'

const ClientTableRow = ({ client, selectedClients, setSelectedClients }) => {
    const date = new Date(client.dateCreate)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = date.getDate()
    day = day < 10 ? '0' + day : day

    const isInSelectedClient = selectedClients.includes(client.id)
    const handleChangeSelected = id => () => {
        if (selectedClients.includes(id)) {
            const clientIndex = selectedClients.indexOf(id)
            setSelectedClients(prev => {
                const newSelectedClients = [...prev]
                newSelectedClients.splice(clientIndex, 1)
                return newSelectedClients
            })
        } else {
            setSelectedClients(prev => {
                const newSelectedClients = [...prev]
                newSelectedClients.push(id)
                return newSelectedClients
            })
        }
    }

    return (
        <TableRow hover role={'checkbox'}>
            <TableCell align={'left'} padding={'none'}>
                <Checkbox
                    size="small"
                    color="primary"
                    checked={isInSelectedClient}
                    onChange={handleChangeSelected(client.id)}
                    inputProps={{
                        'aria-labelledby': client.id,
                    }}
                    forTable
                />
            </TableCell>
            <TableCell component="th" id={client.id} scope="row" padding="none">
                {client.name}
            </TableCell>
            <TableCell align="left">{client.type}</TableCell>
            <TableCell align="left">
                {day}.{month}.{year}
            </TableCell>
            <TableCell align="left">{client.phone}</TableCell>
            <TableCell align="left">{client.email}</TableCell>
            <TableCell align="right">{client.orderQuantity}</TableCell>
            <TableCell align="right">{client.turnover} грн.</TableCell>
            <TableCell align="right">
                {client.order} от {day}.{month}.{year}
            </TableCell>
        </TableRow>
    )
}

export default ClientTableRow
