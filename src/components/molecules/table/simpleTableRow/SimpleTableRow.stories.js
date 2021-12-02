import React from 'react'
import SimpleTableRow from './SimpleTableRow'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/SimpleTableRow',
    component: SimpleTableRow,
}

const Template = args => (
    <Table>
        <TableBody>
            <SimpleTableRow {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    rowFields: {
        id: 2,
        imgSrc: '',
        vendorCode: 3003,
        name: 'Товар 03',
        price: 800.5,
        weight: 1.0,
        count: 3,
    },
    deleteRow: id => () => console.log('delete this row', id),
    cellsTypes: [undefined, true, false, true, true, true, true, undefined],
    changePrice: id => () => console.log('change price', id),
    changeCount: id => () => console.log('change count', id),
}

export const Example2 = Template.bind({})
Example2.args = {
    rowFields: {
        id: 2,
        imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
        vendorCode: 3003,
        name: 'Товар 03',
        price: 800.5,
        weight: 1.0,
        count: 3,
    },
    deleteRow: id => () => console.log('delete this row', id),
    cellsTypes: [undefined, true, false, true, true, true, true, undefined],
    changePrice: id => () => console.log('change price', id),
    changeCount: id => () => console.log('change count', id),
}
