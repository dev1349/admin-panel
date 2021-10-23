import React from 'react'
import TableHead from './TableHead'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/table/tableHead',
    component: TableHead,
}

const Template = args => <TableHead {...args} />

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Название группы',
        sorting: true,
    },
    {
        id: 'sortOrder',
        numeric: true,
        disablePadding: true,
        label: 'Порядок сортировки',
        sorting: true,
    },
]

export const Example1 = Template.bind({})
Example1.args = {
    headCells: headCells,
    order: 'asc',
    orderBy: 'name',
    clickTableSortLabel: () => () => alert('soriting'),
    rowCount: 5,
    selectedRowCount: 5,
    clickAllSelectCheckbox: () => () => alert('Select All'),
}
