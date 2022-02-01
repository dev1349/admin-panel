import React from 'react'
import PhoneField from './PhoneField'

export default {
    title: 'molecules/inputs/PhoneField',
    component: PhoneField,
}

const Template = args => <PhoneField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'phoneid',
    name: 'phone',
    value: '+3099952',
    onChange: payload => console.log('change', payload),
    autoFocus: true,
    fullWidth: true,
    shouldValidate: true,
    required: true,
    validationRules: 'Укажите телефон в формате "0XX XXX XX XX"',
    validatingNow: true,
    setValidationResult: payload => console.log('payload = ', payload),
    haveHelperText: true,
}
