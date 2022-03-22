import React from 'react'
import ToggleButtonWithText from './ToggleButtonWithText'
import AddIcon from '../icons/addIcon/AddIcon'

export default {
    title: 'atoms/ToggleButtonWithText',
    component: ToggleButtonWithText,
}

const Template = args => <ToggleButtonWithText {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon />,
    text: 'Позиция',
    selected: true,
    value: 'check',
}
