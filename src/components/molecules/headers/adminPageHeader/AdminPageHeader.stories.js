import React from 'react'
import AdminPageHeader from './AdminPageHeader'
import CategoryIcon from '../../../atoms/icons/categoryIcon/CategoryIcon'
import IconButton from '../../buttons/iconButton/IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'

export default {
    title: 'molecules/headers/AdminPageHeader',
    component: AdminPageHeader,
}

const Template = args => <AdminPageHeader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    icon: <CategoryIcon dialogIcon />,
    title: 'Список категорий',
    buttons: [
        <IconButton key={0}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1}>
            <DeleteIcon />
        </IconButton>,
    ],
}
