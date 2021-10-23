import React from 'react'
import SimpleButton from './SimpleButton'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/SimpleButton',
    component: SimpleButton,
}

const Template = args => <SimpleButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    variant: 'contained',
    children: 'Ok',
    color: 'primary',
}

export const Example2 = Template.bind({})
Example2.args = {
    variant: 'contained',
    children: 'Ok',
    color: 'success',
}

export const Example3 = Template.bind({})
Example3.args = {
    variant: 'contained',
    children: 'Ok',
    color: 'error',
}
