import React from 'react'
import ClientsTableHead from './ClientsTableHead'
import { Table } from '@mui/material'

export default {
    title: 'organisms/table/ClientsTableHead',
    component: ClientsTableHead,
}

const Template = args => (
    <Table>
        <ClientsTableHead {...args} />
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {}
