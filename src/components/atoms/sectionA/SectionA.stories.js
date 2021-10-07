import React from 'react'
import {SectionA} from './SectionA'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/SectionA',
    component: SectionA
}

const Template = (args) => <SectionA {...args} />

export const Example1 = Template.bind({})

Example1.args = {
    text: "Example1",
    color: "red"
}

export const Example2 = Template.bind({})
Example2.args = {
    text: "Example2",
    color: "blue"
}