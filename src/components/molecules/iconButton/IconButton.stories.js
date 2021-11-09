import React from 'react'
import IconButton from './IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import globalTheme from '../../../theme'

export default {
    title: 'molecules/IconButtons/IconButton',
    component: IconButton,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => <IconButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    theme: globalTheme,
    children: <AddIcon />,
}

export const Example2 = Template.bind({})
Example2.args = {
    theme: globalTheme,
    children: <DeleteIcon />,
}

export const Example3 = Template.bind({})
Example3.args = {
    theme: globalTheme,
    children: <EditIcon />,
}

export const Example4 = Template.bind({})
Example4.args = {
    theme: globalTheme,
    children: <SaveIcon />,
}

export const Example5 = Template.bind({})
Example5.args = {
    theme: globalTheme,
    children: <UndoIcon />,
}
