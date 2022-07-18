import React from 'react'
import AddGoodCommonTab from './AddGoodCommonTab'

export default {
    title: 'organisms/AddGoodCommonTab',
    component: AddGoodCommonTab,
}

const Template = args => <AddGoodCommonTab {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    values: {},
    handleChange: payload => console.log(payload),
    allGoodType: [
        { id: 0, name: 'type01' },
        { id: 1, name: 'type02' },
        { id: 2, name: 'type03' },
    ],
}
