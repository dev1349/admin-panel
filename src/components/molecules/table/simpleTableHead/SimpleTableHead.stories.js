import React from 'react'
import SimpleTableHead from './SimpleTableHead'
import { Table } from '@mui/material'

export default {
    title: 'molecules/table/SimpleTableHead',
    component: SimpleTableHead,
}

const Template = args => (
    <Table>
        <SimpleTableHead {...args} />
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    headerCells: [
        {
            id: 'image',
            label: 'Фото',
        },
        {
            id: 'vendorCode',
            label: 'Артикул',
            numeric: true,
        },
        {
            id: 'name',
            label: 'Наименование',
            numeric: false,
        },
        {
            id: 'price',
            label: 'Цена',
            numeric: true,
        },
        {
            id: 'weight',
            label: 'Вес',
            numeric: true,
        },
        {
            id: 'count',
            label: 'Количество',
            numeric: true,
        },
        {
            id: 'sum',
            label: 'Сумма',
            numeric: true,
        },
    ],
}
