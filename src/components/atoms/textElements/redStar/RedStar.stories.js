import React from 'react'
import RedStar from './RedStar'

export default {
    title: 'atoms/textElements/RedStar',
    component: RedStar,
}

const Template = args => <RedStar {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some red text...',
}
