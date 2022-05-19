import React from 'react'
import Button from './Button'

export default {
    title: 'atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => <Button {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Ok',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: 'Нет',
    dialogButton: true,
}
