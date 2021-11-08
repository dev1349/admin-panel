import React from 'react'
import VerticalModalTemplate from './VerticalModalTemplate'

export default {
    title: 'templates/VerticalModalTemplate',
    component: VerticalModalTemplate,
}

const Template = args => <VerticalModalTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ backgroundColor: 'green', height: '100px' }}>
            Текст в модальном окне
        </div>,
        <span
            key={1}
            style={{
                backgroundColor: 'yellow',
                padding: '10px',
                borderRadius: '5px',
                boxSizing: 'border-box',
                border: '1px solid green',
                display: 'inline-block',
            }}
        >
            Кнопка
        </span>,
    ],
}
