import React from 'react'
import ButtonsRightTemplate from './ButtonsRightTemplate'

export default {
    title: 'templates/ButtonsRightTemplate',
    component: ButtonsRightTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <ButtonsRightTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <span
            key={0}
            style={{
                height: '30px',
                minWidth: '30px',
                backgroundColor: 'yellow',
                padding: '10px',
            }}
        >
            button 1
        </span>,
        <span
            key={1}
            style={{
                height: '30px',
                width: '30px',
                backgroundColor: 'red',
                padding: '10px',
            }}
        >
            button 2
        </span>,
        <span
            key={2}
            style={{
                height: '30px',
                width: '30px',
                backgroundColor: 'blue',
                padding: '10px',
            }}
        >
            button 3
        </span>,
    ],
}
