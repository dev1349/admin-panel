import React from 'react'
import LabelTemplate from './LabelTemplate'

export default {
    title: 'templates/LabelTemplate',
    component: LabelTemplate,
}

const Template = args => <LabelTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ backgroundColor: 'yellow' }}>Some label text</div>,
}
