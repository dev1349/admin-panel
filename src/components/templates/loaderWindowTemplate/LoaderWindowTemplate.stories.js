import React from 'react'
import LoaderWindowTemplate from './LoaderWindowTemplate'

export default {
    title: 'templates/LoaderWindowTemplate',
    component: LoaderWindowTemplate,
}

const Template = args => <LoaderWindowTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50px',
                backgroundColor: 'red',
            }}
        />
    ),
}
