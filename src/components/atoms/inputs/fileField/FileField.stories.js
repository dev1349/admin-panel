import React from 'react'
import FileField from './FileField'

export default {
    title: 'atoms/inputs/FileField',
    component: FileField,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <FileField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    onClick: () => console.log('click to file button...'),
}
