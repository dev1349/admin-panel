import React from 'react'
import ArrowDropDownIcon from './ArrowDropDownIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'atoms/icons/ArrowDropDownIcon',
    component: ArrowDropDownIcon,
}

const Template = args => <ArrowDropDownIcon {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    color: 'action',
    fontSize: 'large',
}

export const Example2 = Template.bind({})
Example2.args = {
    htmlColor: '#ff0000',
    fontSize: 'medium',
}

export const Example3 = Template.bind({})
Example3.args = {
    color: 'info',
    fontSize: 'small',
}
