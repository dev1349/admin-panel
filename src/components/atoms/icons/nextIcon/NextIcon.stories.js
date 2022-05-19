import React from 'react'
import NextIcon from './NextIcon'

export default {
    title: 'atoms/icons/NextIcon',
    component: NextIcon,
}

const Template = args => <NextIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {}

export const Example2 = Template.bind({})
Example2.args = {
    dialogIcon: true,
}
