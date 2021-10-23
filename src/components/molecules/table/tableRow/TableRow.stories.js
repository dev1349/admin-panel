import React from 'react'
import TableRow from './TableRow'

//todo: удалить после перехода на atomic design
export default {
    title: 'molecules/table/tableRow',
    component: TableRow,
}

const Template = args => <TableRow {...args} />

const createData = (name, calories, fat, carbs, protein) => ({
    name,
    calories,
    fat,
    carbs,
    protein,
})

const row = createData('Cupcake', 305, 3.7, 67, 4.3)

export const Example1 = Template.bind({})
Example1.args = {
    rowFields: row,
    id: 1,
    isHeadCellsNumeric: true,
    checkAttributeGroup: () => () => alert('Check attributeGroup'),
    clickEditAttributeGroup: () => () => alert('Edit attribute group'),
    isAttributeGroupChecked: id => () => alert(id),
}
