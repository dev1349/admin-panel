import React from 'react'
import HorizontalTabs from './HorizontalTabs'

export default {
    title: 'molecules/tabs/HorizontalTabs',
    component: HorizontalTabs,
}

const Template = args => <HorizontalTabs {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    titles: ['Item one', 'Item two', 'Item three'],
    children: ['Item one', 'Item two', 'Item three'],
}
