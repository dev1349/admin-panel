import React from 'react'
import SimpleTableDiscount from './SimpleTableDiscount'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/SimpleTableDiscount',
    component: SimpleTableDiscount,
}

const Template = args => (
    <Table>
        <TableBody>
            <SimpleTableDiscount {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    discount: {
        type: '%',
        value: 10,
        comment: 'some comment',
    },
    deleteDiscount: () => console.log('delete discount'),
    discountSum: 10000,
}
