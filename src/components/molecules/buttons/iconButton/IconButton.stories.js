import React from 'react'
import IconButton from './IconButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'

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
    dialogButton: false,
    disabled: false,
    menuButton: false,
    disableRipple: true,
    checkedImages: false,
}
