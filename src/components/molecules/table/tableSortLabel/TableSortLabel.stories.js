import React from 'react'
import TableSortLabel from './TableSortLabel'
import ArrowDropDownIcon from '../../../atoms/icons/arrowDropDownIcon/ArrowDropDownIcon'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/table/TableSortLabel',
    component: TableSortLabel,
}

const Template = args => <TableSortLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    active: true,
    onClick: () => alert('Click to sort label'),
}

export const Example2 = Template.bind({})
Example2.args = {
    active: false,
    direction: 'asc',
}

export const Example3 = Template.bind({})
Example3.args = {
    active: true,
    direction: 'desc',
    IconComponent: ArrowDropDownIcon,
}
