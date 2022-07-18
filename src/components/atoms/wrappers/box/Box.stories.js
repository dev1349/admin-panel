import React from 'react'
import Box from './Box'

export default {
    title: 'atoms/wrappers/Box',
    component: Box,
}

const Template = args => <Box {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ height: '100vh', backgroundColor: 'green' }} />,
    marginLeft31: false,
    flexGrow1: false,
    activeItem: false,
    marginLeft4: false,
    paddingRight41: false,
    marginTop7: false,
    marginTop10: false,
    marginTop2: false,
    maxHeight500: false,
    marginLeft62: false,
    addImageContent: false,
}
