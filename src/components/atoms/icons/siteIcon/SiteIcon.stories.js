import React from 'react'
import SiteIcon from './SiteIcon'

export default {
    title: 'atoms/icons/SiteIcon',
    component: SiteIcon,
}

const Template = args => <SiteIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
}
