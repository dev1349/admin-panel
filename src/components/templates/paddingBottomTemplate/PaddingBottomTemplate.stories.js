import React from 'react'
import PaddingBottomTemplate from './PaddingBottomTemplate'

export default {
    title: 'templates/PaddingBottomTemplate',
    component: PaddingBottomTemplate,
}

const Template = args => <PaddingBottomTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ backgroundColor: 'green', height: '100px' }}>
            Текст в модальном окне
        </div>,
    ],
}
