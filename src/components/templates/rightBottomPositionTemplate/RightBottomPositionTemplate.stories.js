import React from 'react'
import RightBottomPositionTemplate from './RightBottomPositionTemplate'

export default {
    title: 'templates/RightBottomPositionTemplate',
    component: RightBottomPositionTemplate,
}

const Template = args => <RightBottomPositionTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{
                height: '300px',
                backgroundColor: 'yellow',
            }}
        >
            some text to position relative...
        </div>,
        <div
            key={1}
            style={{ height: '50px', width: '50px', backgroundColor: 'blue' }}
        />,
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    children: [
        <div
            key={0}
            style={{
                height: '300px',
                width: '300px',
                backgroundColor: 'yellow',
            }}
        />,
        <div
            key={1}
            style={{ height: '50px', width: '50px', backgroundColor: 'blue' }}
        />,
    ],
}
