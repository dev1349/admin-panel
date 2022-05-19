import React from 'react'
import Loader from './Loader'

export default {
    title: 'molecules/loader/Loader',
    component: Loader,
}

const Template = args => <Loader {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogProgress: true,
}
