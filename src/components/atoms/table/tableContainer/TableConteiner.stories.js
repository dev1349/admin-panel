import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import TableContainer from './TableContainer'

export default {
    title: 'atoms/table/TableContainer',
    component: TableContainer,
}

const Template = args => (
    <TableContainer {...args}>
        <Table>
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
    </TableContainer>
)

export const Example1 = Template.bind({})
Example1.args = {}
