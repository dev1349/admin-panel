import React from 'react'
import OrderInfo from './OrderInfo'

export default {
    title: 'organisms/forms/OrderInfo',
    component: OrderInfo,
}

const Template = args => <OrderInfo {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    title: 'ИНФОРМАЦИЯ О ЗАКАЗЕ',
    checked: true,
    checkBoxHandler: () => console.log('change'),
    orderStatusHandler: () => console.log('change'),
    paymentStatusHandler: () => console.log('change'),
    autoFocus: true,
    orderStatusItems: [
        {
            id: 0,
            label: '10',
            value: 10,
        },
        {
            id: 1,
            label: '20',
            value: 20,
        },
        {
            id: 2,
            label: '30',
            value: 30,
        },
    ],
    orderPaymentItems: [
        {
            id: 0,
            label: '10',
            value: 10,
        },
        {
            id: 1,
            label: '20',
            value: 20,
        },
        {
            id: 2,
            label: '30',
            value: 30,
        },
    ],
    orderStatusValue: '10',
    orderPaymentValue: '30',
}
