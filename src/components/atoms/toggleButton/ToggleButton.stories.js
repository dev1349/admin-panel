import React from 'react'
import ToggleButton from './ToggleButton'
import AddIcon from '../icons/addIcon/AddIcon'

export default {
    title: 'atoms/ToggleButton',
    component: ToggleButton,
}

const Template = args => <ToggleButton {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon />,
    text: 'Позиция',
    selected: true,
    value: 'check',
}
