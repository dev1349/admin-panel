import React from 'react'
import ButtonsWrapperTemplate from './ButtonsWrapperTemplate'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'

export default {
    title: 'templates/ButtonsWrapperTemplate',
    component: ButtonsWrapperTemplate,
}

const Template = args => <ButtonsWrapperTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <IconButton key={0}>
            <AddIcon />
        </IconButton>,
        <IconButton key={1}>
            <DeleteIcon />
        </IconButton>,
    ],
}
