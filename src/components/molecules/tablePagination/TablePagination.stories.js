import React from 'react'
import TablePagination from './TablePagination'

export default {
    title: 'molecules/table/TablePagination',
    component: TablePagination,
}

const Template = args => <TablePagination {...args} />

export const Example1 = Template.bind({})
Example1.args = {}
