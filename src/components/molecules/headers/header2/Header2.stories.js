import React from 'react'
import Header2 from './Header2'
import ListIcon from '../../../atoms/icons/listIcon/ListIcon'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'

export default {
    title: 'molecules/headers/Header2',
    component: Header2,
}

const Template = args => <Header2 {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    icon: <ListIcon />,
    children: 'Список групп атрибутов',
}

export const Example2 = Template.bind({})
Example2.args = {
    icon: <AddIcon />,
    children: 'Добавление группы',
}

export const Example3 = Template.bind({})
Example3.args = {
    icon: <EditIcon />,
    children: 'Редактирование группы',
}

export const Example4 = Template.bind({})
Example4.args = {
    children: 'Редактирование группы',
}
