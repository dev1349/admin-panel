import React from 'react'
import LabeledNumberField from './LabeledNumberField'
import HelpIcon from '../../../atoms/icons/helpIcon/HelpIcon'

export default {
    title: 'molecules/inputs/LabeledNumberField',
    component: LabeledNumberField,
}

const Template = args => <LabeledNumberField {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'addEditAttributeGroupLabel0',
    label: 'Some label text',
    value: 3,
    onChange: () => console.log('change'),
    autoFocus: true,
    name: 'sortOrder',
    pattern: '^(|[0-9]*)$',
    isHelp: true,
    helpText: 'Some help text',
    helpIcon: <HelpIcon canHover />,
}
