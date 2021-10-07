import React from 'react'
import {ButtonA} from './ButtonA'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/ButtonA',
    component: ButtonA
}

const Template = (args) => <ButtonA {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: "Button",
    bColor: "black",
    tColor: "blue"
}

export const Example2 = Template.bind({})
Example2.args = {
    children: "Button",
    bColor: "red",
    tColor: "blue"
}