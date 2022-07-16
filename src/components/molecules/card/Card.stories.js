import React from 'react'
import Card from './Card'
import UsersIcon from '../../atoms/icons/usersIcon/UsersIcon'

export default {
    title: 'molecules/Card',
    component: Card,
}

const Template = args => <Card {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    title: 'Title',
    changes: { percent: '-12%', status: 2 },
    count: 240,
    Svg: UsersIcon,
}
