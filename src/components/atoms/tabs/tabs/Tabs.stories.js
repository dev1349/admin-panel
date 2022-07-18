import React from 'react'
import Tabs from './Tabs'

export default {
    title: 'atoms/tabs/Tabs',
    component: Tabs,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => <Tabs {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    label: 'Item One',
}

export const DialogTabs = Template.bind({})
DialogTabs.args = {
    label: 'Item One',
    dialogTabs: true,
}
