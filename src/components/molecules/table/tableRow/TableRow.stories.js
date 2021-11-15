import React from 'react'
import TableRow from './TableRow'
import { Table, TableBody } from '@mui/material'

export default {
    title: 'molecules/table/tableRow',
    component: TableRow,
}

const Template = args => (
    <Table>
        <TableBody>
            <TableRow {...args} />
        </TableBody>
    </Table>
)

const createData = (id, name, calories, fat, carbs, protein) => ({
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
})

const row = createData(1, 'Cupcake', 305, 3.7, 67, 4.3)

export const Example1 = Template.bind({})
Example1.args = {
    rowFields: row,
    id: 1,
    headerCellTypes: [undefined, true, true, true, true],
    onCheckRow: () => () => console.log('Check row'),
    onEditRow: () => () => console.log('Edit row'),
    isRowChecked: () => true,
}
