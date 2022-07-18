import React from 'react'
import AddGoodDataTab from './AddGoodDataTab'

export default {
    title: 'organisms/AddGoodDataTab',
    component: AddGoodDataTab,
}

const Template = args => <AddGoodDataTab {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    values: {},
    handleChange: payload => console.log(payload),
}
