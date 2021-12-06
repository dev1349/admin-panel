import React from 'react'
import ButtonWithIconAndLabel from './ButtonWithIconAndLabel'
import SearchIcon from '../../../atoms/icons/searchIcon/SearchIcon'

export default {
    title: 'molecules/buttons/ButtonWithIconAndLabel',
    component: ButtonWithIconAndLabel,
}

const Template = args => <ButtonWithIconAndLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    icon: <SearchIcon />,
    label: 'Найти',
    onClick: () => console.log('click on button with icon and label'),
}
