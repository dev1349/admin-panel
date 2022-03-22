import React from 'react'
import ClientFunctionContainerTemplate from './ClientFunctionContainerTemplate'

export default {
    title: 'templates/ClientFunctionContainerTemplate',
    component: ClientFunctionContainerTemplate,
}

const Template = args => (
    <div style={{ border: '1px solid red' }}>
        <ClientFunctionContainerTemplate {...args} />
    </div>
)

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <div key={0} style={{ height: '30px', backgroundColor: 'blue' }} />,
    ],
}
