import React from 'react'
import Box from './Box'

export default {
    title: 'atoms/wrappers/Box',
    component: Box,
}

const Template = args => <Box {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ height: '100px', backgroundColor: 'green' }} />,
    marginLeft31: false,
    flexGrow1: false,
    activeItem: false,
    marginLeft4: false,
    paddingRight41: false,
    marginTop7: false,
}
