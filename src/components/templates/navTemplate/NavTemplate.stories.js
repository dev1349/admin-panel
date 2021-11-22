import React from 'react'
import NavTemplate from './NavTemplate'

export default {
    title: 'templates/NavTemplate',
    component: NavTemplate,
}

const Template = args => <NavTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                height: '100px',
                backgroundColor: 'yellow',
                margin: '10px',
            }}
        />
    ),
}
