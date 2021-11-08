import React from 'react'
import GreyBorderedWrapper from './GreyBorderedWrapper'

export default {
    title: 'atoms/wrappers/GreyBorderedWrapper',
    component: GreyBorderedWrapper,
}

const Template = args => <GreyBorderedWrapper {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ width: '100px', height: '100px' }} />,
}
