import React from 'react'
import Fragment from './Fragment'

export default {
    title: 'atoms/Fragment',
    component: Fragment,
}

const Template = args => <Fragment {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Some text fragment',
    requiredFieldStar: false,
}
