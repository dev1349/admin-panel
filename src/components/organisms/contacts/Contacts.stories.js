import React from 'react'
import Contacts from './Contacts'

export default {
    title: 'organisms/Contacts',
    component: Contacts,
}

const Template = args => <Contacts {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
