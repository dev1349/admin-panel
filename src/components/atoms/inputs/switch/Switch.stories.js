import React from 'react'
import Switch from './Switch'

export default {
    title: 'atoms/inputs/Switch',
    component: Switch,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <Switch {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    checked: true,
}

export const Example2 = Template.bind({})
Example2.args = {
    checked: true,
    dialogSwitch: true,
    disabled: false,
}
