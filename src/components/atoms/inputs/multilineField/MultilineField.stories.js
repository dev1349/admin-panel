import React from 'react'
import MultilineField from './MultilineField'

export default {
    title: 'atoms/inputs/MultilineField',
    component: MultilineField,
    argTypes: {
        onKeyDown: { action: 'keyDown' },
        onChange: { action: 'change' },
    },
}

const Template = args => <MultilineField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    value: 'some multiline text...',
}
