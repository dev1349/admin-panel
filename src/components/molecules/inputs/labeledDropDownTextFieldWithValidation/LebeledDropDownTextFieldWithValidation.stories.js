import React from 'react'
import LabeledDropDownTextFieldWithValidation from './LabeledDropDownTextFieldWithValidation'

export default {
    title: 'molecules/inputs/LabeledDropDownTextFieldWithValidation',
    component: LabeledDropDownTextFieldWithValidation,
}

const Template = args => <LabeledDropDownTextFieldWithValidation {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    label: 'Some label text...',
    name: 'name',
    value: '4',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    pattern: /^(|\+[0-9]*|[0-9]*)$/,
    helperText: 'Максимум 10 символов',
    check: [
        {
            checking: value => {
                return value?.length < 5
            },
            attentionMessage: 'Введите минимум 5 символов',
        },
        {
            checking: value => {
                return value?.length > 10
            },
            attentionMessage: 'Введите не более 10 символов',
        },
    ],
}
