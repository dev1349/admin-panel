import React from 'react'
import EmailField from './EmailField'

export default {
    title: 'molecules/inputs/EmailField',
    component: EmailField,
}

const Template = args => <EmailField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'test',
    name: 'email',
    value: 'alkirichenko@gmail.com.',
    onChange: () => console.log('change email field'),
    autoFocus: true,
    fullWidth: true,
    pattern: /^[\w-.@]*$/,
    placeholder: 'Укажите свой email',
    shouldValidate: true,
    required: true,
    validationRules: 'Адрес электронной почты указан неверно',
    validatingNow: true,
    setValidationResult: payload => console.log('payload = ', payload),
    haveHelperText: true,
}
