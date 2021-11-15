import React from 'react'
import TableHead from './TableHead'
import { Table } from '@mui/material'

export default {
    title: 'molecules/table/tableHead',
    component: TableHead,
}

const Template = args => (
    <Table>
        <TableHead {...args} />
    </Table>
)

const headerCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Название группы',
        sorting: true,
    },
    {
        id: 'sortOrder',
        disablePadding: true,
        label: 'Порядок сортировки',
        sorting: true,
    },
    {
        id: 'sort',
        disablePadding: true,
        label: 'Сорт',
        sorting: true,
    },
]

export const Example1 = Template.bind({})
Example1.args = {
    headerCells: headerCells,
    order: 'asc',
    orderBy: 'name',
    onClickSortLabel: () => () => console.log('sorting'),
    rowCount: 5,
    selectedRowCount: 5,
    onCheckAll: () => () => console.log('Select All'),
}
