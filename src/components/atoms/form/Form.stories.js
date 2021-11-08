import React from 'react'
import Form from './Form'

export default {
    title: 'atoms/Form',
    component: Form,
}

const Template = args => <Form {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <input key={0} type={'text'} placeholder={'input something'} />,
        <input key={1} type={'number'} placeholder={'input something'} />,
    ],
}
