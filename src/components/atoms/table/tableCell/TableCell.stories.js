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
    headCell: false,
    dialogCell: false,
    dialogHeadCell: false,
    dialogButtonCell: false,
}
