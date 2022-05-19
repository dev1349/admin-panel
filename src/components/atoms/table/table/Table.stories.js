import React from 'react'
import Table from './Table'
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export default {
    title: 'atoms/table/Table',
    component: Table,
}

const Template = args => (
    <Table {...args}>
        <TableHead>
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
Example1.args = {
    dialogTable: true,
}
