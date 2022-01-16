import React from 'react'
import SalesmanComment from './SalesmanComment'

export default {
    title: 'molecules/inputs/SalesmanComment',
    component: SalesmanComment,
}

const Template = args => <SalesmanComment {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'Комментарии продавца',
    name: 'salesmanComment',
    value: 'some comment',
    onChange: () => console.log('change comment'),
}
