import React from 'react'
import SimpleHeader1SaveReturn from './SimpleHeader1SaveReturn'

export default {
    title: 'molecules/headers/SimpleHeader1SaveReturn',
    component: SimpleHeader1SaveReturn,
}

const Template = args => <SimpleHeader1SaveReturn {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: 'Категории',
    onSave: () => console.log('save'),
    onReturn: () => console.log('return'),
    isSaveButtonDisabled: false,
    isReturnButtonDisabled: false,
}
