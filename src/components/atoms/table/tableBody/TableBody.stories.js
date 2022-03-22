import React from 'react'
import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import TableBody from './TableBody'

export default {
    title: 'atoms/table/TableBody',
    component: TableBody,
}

const Template = args => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>head 01</TableCell>
                <TableCell>head 02</TableCell>
                <TableCell>head 03</TableCell>
            </TableRow>
        </TableHead>
        <TableBody {...args}>
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
