import React from 'react'
import DropDownTextFieldWithValidation from './DropDownTextFieldWithValidation'

export default {
    title: 'molecules/inputs/DropDownTextFieldWithValidation',
    component: DropDownTextFieldWithValidation,
}

const Template = args => <DropDownTextFieldWithValidation {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: '3',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
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
