import React from 'react'
import TabTitlesWrapper from './TabTitlesWrapper'

export default {
    title: 'atoms/tabs/TabTitlesWrapper',
    component: TabTitlesWrapper,
}

const Template = args => <TabTitlesWrapper {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ height: '30px' }} />,
}
