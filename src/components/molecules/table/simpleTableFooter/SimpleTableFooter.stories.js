import React from 'react'
import SimpleTableFooter from './SimpleTableFooter'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/SimpleTableFooter',
    component: SimpleTableFooter,
}

const Template = args => (
    <Table>
        <TableBody>
            <SimpleTableFooter {...args} />
        </TableBody>
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    deliveryTypes: [
        {
            id: 0,
            name: 'Самовывоз',
            price: 100,
        },
        {
            id: 1,
            name: 'Доставка курьером',
            price: 200,
        },
        {
            id: 2,
            name: 'Доставка перевозчиком',
            price: 300,
        },
    ],
    deliveryCurrentTypes: 100,
    changeDelivery: () => console.log('change delivery type'),
    deliveryPrice: '345',
    changeDeliveryPrice: () => console.log('change delivery price'),
    disabled: false,
}

export const Example2 = Template.bind({})
Example2.args = {
    deliveryTypes: [
        {
            id: 0,
            name: 'Самовывоз',
            price: 100,
        },
        {
            id: 1,
            name: 'Доставка курьером',
            price: 200,
        },
        {
            id: 2,
            name: 'Доставка перевозчиком',
            price: 300,
        },
    ],
    deliveryCurrentTypes: 100,
    changeDelivery: () => console.log('change delivery type'),
    deliveryPrice: '345',
    changeDeliveryPrice: () => console.log('change delivery price'),
    disabled: false,
    deliveryPriceDisabled: true,
}
