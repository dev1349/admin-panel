import React from 'react'
import TableRow from './AtomTableRow'
import { Table, TableBody, TableCell, TableHead } from '@mui/material'

export default {
    title: 'atoms/table/AtomTableRow',
    component: TableRow,
}

const Template = args => (
    <Table>
        <TableHead>
            <TableRow {...args}>
                <TableCell>head 01</TableCell>
                <TableCell>head 02</TableCell>
                <TableCell>head 03</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>cell 01</TableCell>
                <TableCell>cell 01</TableCell>
                <TableCell>cell 01</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {}
