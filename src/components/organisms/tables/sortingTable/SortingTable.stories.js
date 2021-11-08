import React from 'react'
import SortingTable from './SortingTable'

export default {
    title: 'organisms/table/SortingTable',
    component: SortingTable,
}

const Template = args => <SortingTable {...args} />

const headerCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
        sorting: true,
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
        sorting: true,
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
        sorting: true,
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
        sorting: true,
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
        sorting: true,
    },
]

function createData(id, name, calories, fat, carbs, protein) {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    }
}

const rows = [
    createData(0, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(1, 'Donut', 452, 25.0, 51, 4.9),
    createData(2, 'Eclair', 262, 16.0, 24, 6.0),
    createData(3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(4, 'Gingerbread', 356, 16.0, 49, 3.9),
    createData(5, 'Honeycomb', 408, 3.2, 87, 6.5),
]

export const Example1 = Template.bind({})
Example1.args = {
    headerCells: headerCells,
    tableRows: rows,
    rowCount: rows.length,
    order: 'asc',
    orderBy: 'name',
    onClickSortLabel: () => () => console.log('sorting'),
    onCheckRow: () => () => console.log('check row'),
    selectedRowCount: 0,
    onCheckAll: () => console.log('check all'),
    onEditRow: () => () => console.log('editing'),
    isRowChecked: () => false,
}
