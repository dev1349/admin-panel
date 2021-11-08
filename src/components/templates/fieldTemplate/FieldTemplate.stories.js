import React from 'react'
import FieldTemplate from './FeildTemplate'

export default {
    title: 'templates/FieldTemplate',
    component: FieldTemplate,
}

const Template = args => <FieldTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: <div style={{ height: '30px', backgroundColor: 'yellow' }} />,
}
