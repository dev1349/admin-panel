import React from 'react'
import SortingTable from './SortingTable'

//todo: удалить после перехода на atomic design
export default {
    title: 'organisms/table/SortingTable',
    component: SortingTable,
}

const Template = args => <SortingTable {...args} />

const HeadCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
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
    headCells: HeadCells,
    tableRows: rows,
    rowCount: rows.length,
    order: 'asc',
    orderBy: 'name',
    clickTableSortLabel: id => console.log(id),
    checkAttributeGroup: id => console.log(id),
    selectedRowCount: 5,
    clickAllSelectCheckbox: id => console.log(id),
    clickEditAttributeGroup: id => console.log(id),
    isAttributeGroupChecked: id => console.log(id),
}
