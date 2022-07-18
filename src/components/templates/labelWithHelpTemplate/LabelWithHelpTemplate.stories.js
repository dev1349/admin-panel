import React from 'react'
import LabelWithHelpTemplate from './LabelWithHelpTemplate'
import HelpIcon from '../../atoms/icons/helpIcon/HelpIcon'
import InputLabel from '../../atoms/inputs/inputLabel/InputLabel'

export default {
    title: 'templates/LabelWithHelpTemplate',
    component: LabelWithHelpTemplate,
}

const Template = args => <LabelWithHelpTemplate {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: [
        <InputLabel htmlFor={'01'} key={0}>
            Some label text
        </InputLabel>,
        <HelpIcon key={1} />,
    ],
}
