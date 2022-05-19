import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
} from '@mui/material'
import TableRow from './TableRow'

export default {
    title: 'atoms/table/TableRow',
    component: TableRow,
}

const Template = args => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow {...args}>
                    <TableCell>head 01</TableCell>
                    <TableCell>head 02</TableCell>
                    <TableCell>head 03</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow {...args}>
                    <TableCell>cell 01</TableCell>
                    <TableCell>cell 01</TableCell>
                    <TableCell>cell 01</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
)

export const Example1 = Template.bind({})
Example1.args = {
    dialogRow: false,
    dialogEvenRow: true,
    dialogActiveRow: false,
}
