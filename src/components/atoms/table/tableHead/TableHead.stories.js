import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material'
import TableHead from './TableHead'

export default {
    title: 'atoms/table/TableHead',
    component: TableHead,
}

const Template = args => (
    <TableContainer>
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
    </TableContainer>
)

export const Example1 = Template.bind({})
Example1.args = {}
