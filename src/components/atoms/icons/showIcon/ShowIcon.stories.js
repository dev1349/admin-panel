import React from 'react'
import ShowIcon from './ShowIcon'

export default {
    title: 'atoms/icons/ShowIcon',
    component: ShowIcon,
}

const Template = args => <ShowIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
