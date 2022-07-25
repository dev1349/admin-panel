import React from 'react'
import GoodIcon from './GoodIcon'

export default {
    title: 'atoms/icons/GoodIcon',
    component: GoodIcon,
}

const Template = args => <GoodIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
