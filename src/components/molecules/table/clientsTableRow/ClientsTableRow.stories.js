import React from 'react'
import ClientsTableRow from './ClientsTableRow'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/ClientsTableRow',
    component: ClientsTableRow,
}

const Template = args => (
    <Table>
        <TableBody>
            <ClientsTableRow {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    client: {
        id: 0,
        name: 'client 01',
        type: 'Физическое лицо',
        dateCreate: '2021-10-10 00:00:00',
        phone: '+380999999999',
        email: 'test@test.com',
        orderQuantity: 0,
        turnover: 0,
        order: 101,
    },
    selectedClients: [0, 1, 2, 3],
    setSelectedClients: () => console.log('set selected clients...'),
}
