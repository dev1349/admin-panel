import React from 'react'
import TableCell from './TableCell'
import { Table, TableBody, TableRow } from '@mui/material'

export default {
    title: 'atoms/table/TableCell',
    component: TableCell,
}

const Template = args => (
    <Table>
        <TableBody>
            <TableRow>
                <TableCell {...args} />
            </TableRow>
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    align: 'left',
    children: 'Some tableCell`s text',
}

export const Example2 = Template.bind({})
Example2.args = {
    align: 'center',
    children: 'Some tableCell`s text',
}

export const Example3 = Template.bind({})
Example3.args = {
    align: 'right',
    children: 'Some tableCell`s text',
}
