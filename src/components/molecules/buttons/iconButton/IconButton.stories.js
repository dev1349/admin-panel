import React from 'react'
import IconButton from './IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import MenuIcon from '../../../atoms/icons/menuIcon/MenuIcon'
import ImportExportIcon from '../../../atoms/icons/importExportIcon/ImportExportIcon'
import HelpIcon from '../../../atoms/icons/helpIcon/HelpIcon'
import LogoutIcon from '../../../atoms/icons/logoutIcon/LogoutIcon'
import ShopsIcon from '../../../atoms/icons/shopsIcon/ShopsIcon'

export default {
    title: 'molecules/buttons/IconButton',
    component: IconButton,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => <IconButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <AddIcon />,
}

export const Example2 = Template.bind({})
Example2.args = {
    children: <DeleteIcon />,
}

export const Example3 = Template.bind({})
Example3.args = {
    children: <EditIcon />,
}

export const Example4 = Template.bind({})
Example4.args = {
    children: <SaveIcon />,
}

export const Example5 = Template.bind({})
Example5.args = {
    children: <UndoIcon />,
}

export const Example6 = Template.bind({})
Example6.args = {
    children: <MenuIcon />,
}

export const Example7 = Template.bind({})
Example7.args = {
    children: <ImportExportIcon />,
}

export const Example8 = Template.bind({})
Example8.args = {
    children: <HelpIcon />,
}

export const Example9 = Template.bind({})
Example9.args = {
    children: <LogoutIcon />,
}

export const Example10 = Template.bind({})
Example10.args = {
    children: <ShopsIcon />,
}

export const Example11 = Template.bind({})
Example11.args = {
    children: <LogoutIcon />,
    menuButton: true,
}

export const Example12 = Template.bind({})
Example12.args = {
    children: <LogoutIcon fontSize={'small'} />,
    size: 'small',
}
