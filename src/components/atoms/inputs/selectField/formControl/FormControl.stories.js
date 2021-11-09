import React from 'react'
import FormControl from './FormControl'

export default {
    title: 'atoms/inputs/selectField/FormControl',
    component: FormControl,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <FormControl {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div
            style={{ width: '100px', height: '35px', backgroundColor: 'red' }}
        />
    ),
}
