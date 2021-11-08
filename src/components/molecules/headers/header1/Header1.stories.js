import React from 'react'
import Header1 from './Header1'

export default {
    title: 'molecules/headers/Header1',
    component: Header1,
}

const Template = args => <Header1 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    mode: 'list',
    children: 'Группы атрибутов',
    toAdd: () => console.log('add group'),
    toReturn: () => console.log('return to list mode'),
    isAllButtonDisabled: false,
    toSave: () => console.log('save group'),
    isSaveButtonDisabled: false,
    toDelete: () => console.log('delete group'),
    isDeleteButtonDisabled: false,
}

export const Example2 = Template.bind({})
Example2.args = {
    mode: 'edit',
    children: 'Группы атрибутов',
}

export const Example3 = Template.bind({})
Example3.args = {
    mode: 'add',
    children: 'Группы атрибутов',
}
