import React from 'react'
import PageHeaderItemRightTemplate from './PageHeaderItemRightTemplate'

export default {
    title: 'templates/PageHeaderItemRightTemplate',
    component: PageHeaderItemRightTemplate,
}

const Template = args => (
    <div style={{ display: 'flex', border: '1px solid red' }}>
        <PageHeaderItemRightTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                backgroundColor: 'yellow',
                height: '200px',
                width: '200px',
            }}
        />
    ),
}
