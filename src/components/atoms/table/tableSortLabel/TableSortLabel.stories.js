import React from 'react'
import TableSortLabel from './TableSortLabel'
import ArrowDropDownIcon from '../../icons/arrowDropDownIcon/ArrowDropDownIcon'

export default {
    title: 'atoms/table/TableSortLabel',
    component: TableSortLabel,
}

const Template = args => <TableSortLabel {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    active: true,
    direction: 'asc',
    onClick: () => console.log('sorting...'),
}

export const Example2 = Template.bind({})
Example2.args = {
    active: true,
    direction: 'desc',
    onClick: () => console.log('sorting...'),
    IconComponent: ArrowDropDownIcon,
}
