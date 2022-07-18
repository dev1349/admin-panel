import React from 'react'
import Tab from './Tab'

export default {
    title: 'atoms/tabs/tab',
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

export const DialogTab = Template.bind({})
DialogTab.args = {
    label: 'Item One',
    dialogTab: true,
}
