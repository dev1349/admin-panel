import React from 'react'
import SimpleTableTotal from './SimpleTableTotal'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/SimpleTableTotal',
    component: SimpleTableTotal,
}

const Template = args => (
    <Table>
        <TableBody>
            <SimpleTableTotal {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    totalPrice: 1000.23,
}

export const Example2 = Template.bind({})
Example2.args = {
    totalPrice: null,
}
