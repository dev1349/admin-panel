import React from 'react'
import TabPanel from './TabPanel'

export default {
    title: 'atoms/tabs/TabPanel',
    component: TabPanel,
}

const Template = args => <TabPanel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                width: '300px',
                height: '200px',
                backgroundColor: 'yellow',
            }}
        >
            Item One
        </div>
    ),
    value: 0,
    index: 0,
}
