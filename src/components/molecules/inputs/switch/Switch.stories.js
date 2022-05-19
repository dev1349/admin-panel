import React from 'react'
import Switch from './Switch'

export default {
    title: 'molecules/inputs/Switch',
    component: Switch,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <Switch {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    name: 'switch01',
    dialogSwitch: true,
    checked: true,
    onChange: payload => console.log(payload),
}
