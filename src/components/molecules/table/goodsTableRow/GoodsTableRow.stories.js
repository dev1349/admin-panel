import React from 'react'
import GoodsTableRow from './GoodsTableRow'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/GoodsTableRow',
    component: GoodsTableRow,
}

const Template = args => (
    <Table>
        <TableBody>
            <GoodsTableRow {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    rowValues: {
        name: 'Some name',
        description: 'some description',
        price: 2040,
        salePrice: 1900,
    },
    cellsTypes: [false, false, true, true],
    deleteGood: () => console.log('delete'),
    changeGood: () => console.log('change'),
}
