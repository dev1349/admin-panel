import React from 'react'
import Tooltip from './Tooltip'
import InfoIcon from '../icons/infoIcon/InfoIcon'

export default {
    title: 'atoms/Tooltip',
    component: Tooltip,
}

const Template = args => <Tooltip {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    children: (
        <div style={{ backgroundColor: 'yellow', width: '24px' }}>
            <InfoIcon dialogIcon />
        </div>
    ),
    arrow: true,
    title: 'some help text...',
    placement: 'top',
    open: true,
}
