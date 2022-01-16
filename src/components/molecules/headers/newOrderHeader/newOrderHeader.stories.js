import React from 'react'
import NewOrderHeader from './newOrderHeader'

export default {
    title: 'molecules/headers/NewOrderHeader',
    component: NewOrderHeader,
}

const Template = args => <NewOrderHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    headerText: 'Новый заказ',
    handleHeaderButtonClick: () => console.log('header button click'),
}
