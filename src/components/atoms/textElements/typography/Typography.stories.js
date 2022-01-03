import React from 'react'
import Typography from './Typography'

export default {
    title: 'atoms/textElements/Typography',
    component: Typography,
}

const Template = args => <Typography {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some text...',
}
