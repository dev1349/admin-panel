import React from 'react'
import CharacteristicIcon from './CharacteristicIcon'

export default {
    title: 'atoms/icons/CharacteristicIcon',
    component: CharacteristicIcon,
}

const Template = args => <CharacteristicIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
