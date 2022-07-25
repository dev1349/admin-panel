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
    children: <AddIcon />,
    selected: true,
    value: '25',
}

export const Example2 = Template.bind({})
Example2.args = {
    children: [<AddIcon fontSize={'small'} key={1} />, <div key={2}>some text</div>],
    selected: true,
    value: '25',
    size: 'small',
}

export const Example3 = Template.bind({})
Example3.args = {
    children: <AddIcon fontSize={'small'} />,
    selected: true,
    value: '25',
    size: 'small',
}

export const DialogToggleButton = Template.bind({})
DialogToggleButton.args = {
    children: '5',
    dialogToggleButton: true,
    value: 5,
    disableRipple: true,
}
