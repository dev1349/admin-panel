import React from 'react'
import TextField from './TextField'

export default {
    title: 'molecules/inputs/TextField',
    component: TextField,
}

const Template = args => <TextField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: '3',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
    pattern: '^[0-9]*$',
}

export const Example2 = Template.bind({})
Example2.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: '3',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
}

export const Example3 = Template.bind({})
Example2.args = {
    id: 'someId0',
    name: 'someFieldsName',
    value: 'd',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
    shouldValidate: true,
    required: true,
    validationRules: [
        {
            checking: value => value.length < 2,
            errorMessage: 'Введите минимум 2 символа',
        },
    ],
    validatingNow: true,
    setValidationResult: payload => console.log('payload = ', payload),
    haveHelperText: true,
    pattern: /^[a-zа-яё]*$/iu,
}
