import React from 'react'
import TableHead from './AtomTableHead'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'

export default {
    title: 'atoms/table/AtomTableHead',
    component: TableHead,
}

const Template = args => (
    <Table>
        <TableHead {...args}>
            <TableRow>
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
