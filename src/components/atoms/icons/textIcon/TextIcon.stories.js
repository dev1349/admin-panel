import React from 'react'
import TextIcon from './TextIcon'

export default {
    title: 'atoms/icons/TextIcon',
    component: TextIcon,
}

const Template = args => <TextIcon {...args} />

export const TextIconDefault = Template.bind({})
TextIconDefault.args = {}

export const TextIconDialogIcon = Template.bind({})
TextIconDialogIcon.args = {
    dialogIcon: true,
}
