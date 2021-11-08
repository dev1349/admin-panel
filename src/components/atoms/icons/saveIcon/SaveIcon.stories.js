import React from 'react'
import SaveIcon from './SaveIcon'

export default {
    title: 'atoms/icons/SaveIcon',
    component: SaveIcon,
}

const Template = args => <SaveIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
