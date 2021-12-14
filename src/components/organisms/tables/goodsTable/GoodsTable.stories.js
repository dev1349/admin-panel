import React from 'react'
import GoodsTable from './GoodsTable'

export default {
    title: 'organisms/table/GoodsTable',
    component: GoodsTable,
}

const Template = args => <GoodsTable {...args} />

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
    tableRows: [
        {
            id: 0,
            name: 'Some name',
            description: 'some description',
            price: 2040,
            salePrice: 1900,
        },
        {
            id: 1,
            name: 'Some name',
            description: 'some description',
            price: 2040,
            salePrice: 1900,
        },
        {
            id: 2,
            name: 'Some name',
            description: 'some description',
            price: 2040,
            salePrice: 1900,
        },
        {
            id: 3,
            name: 'Some name',
            description: 'some description',
            price: 2040,
            salePrice: 1900,
        },
        {
            id: 4,
            name: 'Some name',
            description: 'some description',
            price: 2040,
            salePrice: 1900,
        },
    ],
    deleteGood: () => console.log('delete'),
    changeGood: () => console.log('change'),
}
