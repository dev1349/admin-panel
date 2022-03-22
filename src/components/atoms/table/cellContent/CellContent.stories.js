import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import CellContent from './CellContent'

export default {
    title: 'atoms/table/CellContent',
    component: CellContent,
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
        <TableBody>
            <TableRow>
                <TableCell>
                    <CellContent {...args}>
                        <span>This is</span>&nbsp;cell
                        <span>&nbsp;content!!!</span>
                    </CellContent>
                </TableCell>
                <TableCell>cell 01</TableCell>
                <TableCell>cell 01</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {}
