import React from 'react'
import PaddingBetweenButtonsTemplate from './PaddingBetweenButtonsTemplate'

export default {
    title: 'templates/PaddingBetweenButtonsTemplate',
    component: PaddingBetweenButtonsTemplate,
}

const Template = args => <PaddingBetweenButtonsTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{
                width: '100px',
                height: '30px',
                textAlign: 'center',
                lineHeight: '30px',
                backgroundColor: 'green',
            }}
        >
            Button
        </div>,
        <div
            key={1}
            style={{
                width: '100px',
                height: '30px',
                textAlign: 'center',
                lineHeight: '30px',
                backgroundColor: 'green',
            }}
        >
            Button
        </div>,
        <div
            key={2}
            style={{
                width: '100px',
                height: '30px',
                textAlign: 'center',
                lineHeight: '30px',
                backgroundColor: 'green',
            }}
        >
            Button
        </div>,
    ],
}
