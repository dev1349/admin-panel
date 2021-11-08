import React from 'react'
import Tab from './TabTitle'

export default {
    title: 'atoms/tabs/TabTitle',
    component: Tab,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => <Tab {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'Item One',
}
