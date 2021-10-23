import React from 'react'
import Header1 from './Header1'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/headers/Header1',
    component: Header1,
}

const Template = args => <Header1 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    mode: 'list',
    deleteDisabled: true,
    children: 'Группы атрибутов',
}

export const Example2 = Template.bind({})
Example2.args = {
    mode: 'edit',
    saveDisabled: true,
    children: 'Группы атрибутов',
}

export const Example3 = Template.bind({})
Example3.args = {
    mode: 'add',
    children: 'Группы атрибутов',
}
