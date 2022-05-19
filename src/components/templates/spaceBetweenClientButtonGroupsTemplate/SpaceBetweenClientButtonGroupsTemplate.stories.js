import React from 'react'
import SpaceBetweenClientButtonGroupsTemplate from './SpaceBetweenClientButtonGroupsTemplate'

export default {
    title: 'templates/SpaceBetweenClientButtonGroupsTemplate',
    component: SpaceBetweenClientButtonGroupsTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <SpaceBetweenClientButtonGroupsTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div
            key={0}
            style={{ height: '30px', width: '30px', backgroundColor: 'yellow' }}
        />,
        <div
            key={1}
            style={{ height: '30px', width: '30px', backgroundColor: 'red' }}
        />,
    ],
}
