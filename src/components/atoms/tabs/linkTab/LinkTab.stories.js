import React from 'react'
import LinkTab from './LinkTab'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'atoms/tabs/LinkTab',
    component: LinkTab,
    argTypes: {
        onClick: { action: 'click' },
    },
}

const Template = args => (
    <BrowserRouter>
        <LinkTab {...args} />
    </BrowserRouter>
)

export const DialogTab = Template.bind({})
DialogTab.args = {
    label: 'Item One',
    dialogTab: true,
    to: '/some_address...',
    disableRipple: true,
}
