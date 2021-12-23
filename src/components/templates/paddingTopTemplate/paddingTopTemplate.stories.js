import React from 'react'
import PaddingTopTemplate from './paddingTopTemplate'

export default {
    title: 'templates/PaddingTopTemplate',
    component: PaddingTopTemplate,
}

const Template = args => <PaddingTopTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ backgroundColor: 'green', height: '100px' }}>
            Текст в модальном окне
        </div>,
    ],
}
