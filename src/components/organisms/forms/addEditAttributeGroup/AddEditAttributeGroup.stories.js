import React from 'react'
import AddEditAttributeGroup from './AddEditAttributeGroup'

export default {
    title: 'organisms/forms/AddEditAttributeGroup',
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
            value: 'value 01',
            onChange: () => console.log('change'),
        },
        {
            id: 'addEditAttributeGroupLabel1',
            label: 'Название (ua)',
            name: 'uaName',
            value: 'value 02',
            onChange: () => console.log('change'),
        },
        {
            id: 'addEditAttributeGroupLabel2',
            label: 'Порядок сортировки',
            name: 'sortOrder',
            pattern: '^[1-9]?$',
            value: '3',
            onChange: () => console.log('change'),
        },
    ],
}
