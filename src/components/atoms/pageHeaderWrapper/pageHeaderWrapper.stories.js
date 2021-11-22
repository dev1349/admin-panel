import React from 'react'
import PageHeaderWrapper from './pageHeaderWrapper'

export default {
    title: 'atoms/PageHeaderWrapper',
    component: PageHeaderWrapper,
}

const Template = args => <PageHeaderWrapper {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div style={{ height: '50px', backgroundColor: 'yellow' }}>
            Here must be HEADER!!!
        </div>
    ),
}
