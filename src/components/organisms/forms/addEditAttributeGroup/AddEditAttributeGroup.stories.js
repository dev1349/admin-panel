import React from 'react'
import AddEditAttributeGroup from './AddEditAttributeGroup'

//todo: удалить после перехода на atomic design
export default {
    title: 'organisms/AddEditAttributeGroup',
    component: AddEditAttributeGroup,
}

const Template = args => <AddEditAttributeGroup {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    fields: [
        {
            id: 'addEditAttributeGroupLabel0',
            label: '*Название (rus)',
            name: 'name',
            value: 'aaaaa',
            onChange: props => console.log(props),
        },
        {
            id: 'addEditAttributeGroupLabel1',
            label: 'Название (ua)',
            name: 'uaName',
            value: 'bbbbbb',
            onChange: props => console.log(props),
        },
        {
            id: 'addEditAttributeGroupLabel2',
            label: 'Порядок сортировки',
            name: 'sortOrder',
            pattern: '^[1-9]?$',
            value: '2',
            onChange: props => console.log(props),
        },
    ],
}
