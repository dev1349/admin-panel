import React from 'react'
import ContactPhone from './ContactPhone'

export default {
    title: 'molecules/ContactPhone',
    component: ContactPhone,
}

const Template = args => <ContactPhone {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    phone: 'phone_1',
    index: 0,
    phones: { phone_1: '234', phone_2: '34563456' },
    onChange: () => console.log('change contact phone'),
    setValidationResult: () => console.log('set validation result'),
    clearTouch: false,
    isPhoneDeleteButton: true,
    deletePhone: () => () => console.log('delete phone...'),
}
