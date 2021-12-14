import React from 'react'
import GoodsTableHead from './GoodsTableHead'
import { Table } from '@mui/material'

export default {
    title: 'molecules/table/GoodsTableHead',
    component: GoodsTableHead,
}

const Template = args => (
    <Table>
        <GoodsTableHead {...args} />
    </Table>
)

export const Example1 = Template.bind({})
Example1.args = {
    headerCells: [
        {
            id: 'name',
            label: 'Название товара',
            numeric: false,
        },
        {
            id: 'description',
            label: 'Описание',
            numeric: false,
        },
        {
            id: 'price',
            label: 'Цена',
            numeric: true,
        },
        {
            id: 'salePrice',
            label: 'Цена для продажи',
            numeric: true,
        },
    ],
}
