import React from 'react'
import ViewListIcon from './ViewListIcon'

export default {
    title: 'atoms/icons/ViewListIcon',
    component: ViewListIcon,
}

const Template = args => <ViewListIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    dialogIcon: true,
}
