import React from 'react'
import Select from './Select'
import MenuItem from '../menuItem/MenuItem'

export default {
    title: 'atoms/inputs/selectField/Select',
    component: Select,
    argTypes: {
        onChange: { action: 'change' },
    },
}

const Template = args => <Select {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    displayEmpty: true,
    value: '',
    children: [
        <MenuItem key={0} value={''} disabled>
            Select item
        </MenuItem>,
        <MenuItem key={1} value={10}>
            Ten
        </MenuItem>,
        <MenuItem key={2} value={20}>
            Twenty
        </MenuItem>,
        <MenuItem key={3} value={30}>
            Thirty
        </MenuItem>,
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    displayEmpty: true,
    value: '',
    children: [
        <MenuItem key={0} value={''} disabled>
            Select item
        </MenuItem>,
        <MenuItem key={1} value={10}>
            Ten
        </MenuItem>,
        <MenuItem key={2} value={20}>
            Twenty
        </MenuItem>,
        <MenuItem key={3} value={30}>
            Thirty
        </MenuItem>,
    ],
    forTable: true,
}
