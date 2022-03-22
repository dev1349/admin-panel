import React from 'react'
import SpaceBetweenClientButtonsTemplate from './SpaceBetweenClientButtonsTemplate'

export default {
    title: 'templates/SpaceBetweenClientButtonsTemplate',
    component: SpaceBetweenClientButtonsTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <SpaceBetweenClientButtonsTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <span
            key={0}
            style={{ height: '30px', width: '30px', backgroundColor: 'yellow' }}
        >
            some text
        </span>,
        <span
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        >
            some text
        </span>,
        <span
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'green' }}
        >
            some text
        </span>,
    ],
}
