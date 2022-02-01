import React from 'react'
import LabeledEmailField from './LabeledEmailField'

export default {
    title: 'molecules/inputs/LabeledEmailField',
    component: LabeledEmailField,
}

const Template = args => <LabeledEmailField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'test',
    label: 'E-mail:',
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
