import React from 'react'
import Tooltip from './Tooltip'

export default {
    title: 'atoms/Tooltip',
    component: Tooltip,
}

const Template = args => <Tooltip {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                width: '100px',
                border: '1px solid red',
                padding: '10px',
                backgroundColor: 'yellow',
                marginLeft: '200px',
                marginTop: '200px',
            }}
        >
            Some text...
        </div>
    ),
    arrow: true,
    title: 'some tooltip text...',
    placement: 'top',
}
