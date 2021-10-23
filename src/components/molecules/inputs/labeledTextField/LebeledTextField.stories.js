import React from 'react'
import LabeledTextField from './LabeledTextField'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/inputs/LabeledTextField',
    component: LabeledTextField,
}

const Template = args => <LabeledTextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text...',
    value: 'fdsfasdfasd',
    onChange: () => alert('fdsfasdfasd'),
    autoFocus: true,
    name: 'name',
}
