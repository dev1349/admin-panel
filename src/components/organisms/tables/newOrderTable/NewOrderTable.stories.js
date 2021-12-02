import React from 'react'
import NewOrderTable from './NewOrderTable'

export default {
    title: 'organisms/table/NewOrderTable',
    component: NewOrderTable,
}

const Template = args => <NewOrderTable {...args} />

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
        },
        {
            id: 'name',
            label: 'Наименование',
        },
        {
            id: 'price',
            label: 'Цена',
        },
        {
            id: 'weight',
            label: 'Вес',
        },
        {
            id: 'count',
            label: 'Количество',
        },
        {
            id: 'sum',
            label: 'Сумма',
        },
    ],
    tableRows: [
        {
            id: 0,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3001,
            name: 'Товар 01',
            price: 2365.0,
            weight: 1.0,
            count: 1,
        },
        {
            id: 1,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3002,
            name: 'Товар 02',
            price: 4523.0,
            weight: 3.0,
            count: 1,
        },
        {
            id: 2,
            imgSrc: '',
            vendorCode: 3003,
            name: 'Товар 03',
            price: 800.5,
            weight: 1.0,
            count: 3,
        },
        {
            id: 3,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3004,
            name: 'Товар 04',
            price: 1490.0,
            weight: 2.0,
            count: 2,
        },
        {
            id: 4,
            imgSrc: '',
            vendorCode: 3005,
            name: 'Товар 05',
            price: 11254.8,
            weight: 4.0,
            count: 1,
        },
    ],
    deleteRow: id => () => console.log('delete row', id),
    changePrice: id => () => console.log('change price', id),
    changeCount: id => () => console.log('change count', id),
    deliveryTypes: [
        {
            id: 0,
            name: 'Самовывоз',
            price: 100.0,
        },
        {
            id: 1,
            name: 'Доставка курьером',
            price: 200.0,
        },
        {
            id: 2,
            name: 'Доставка перевозчиком',
            price: 300.0,
        },
    ],
    deliveryCurrentType: 200,
    changeDelivery: () => console.log('change delivery type'),
    deliveryPrice: '345',
    changeDeliveryPrice: () => console.log('change delivery price'),
    totalPrice: 1000,
}

export const Example2 = Template.bind({})
Example2.args = {
    headerCells: [
        {
            id: 'image',
            label: 'Фото',
        },
        {
            id: 'vendorCode',
            label: 'Артикул',
        },
        {
            id: 'name',
            label: 'Наименование',
        },
        {
            id: 'price',
            label: 'Цена',
        },
        {
            id: 'weight',
            label: 'Вес',
        },
        {
            id: 'count',
            label: 'Количество',
        },
        {
            id: 'sum',
            label: 'Сумма',
        },
    ],
    tableRows: [
        {
            id: 0,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3001,
            name: 'Товар 01',
            price: 2365.0,
            weight: 1.0,
            count: 1,
        },
        {
            id: 1,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3002,
            name: 'Товар 02',
            price: 4523.0,
            weight: 3.0,
            count: 1,
        },
        {
            id: 2,
            imgSrc: '',
            vendorCode: 3003,
            name: 'Товар 03',
            price: 800.5,
            weight: 1.0,
            count: 3,
        },
        {
            id: 3,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3004,
            name: 'Товар 04',
            price: 1490.0,
            weight: 2.0,
            count: 2,
        },
        {
            id: 4,
            imgSrc: '',
            vendorCode: 3005,
            name: 'Товар 05',
            price: 11254.8,
            weight: 4.0,
            count: 1,
        },
    ],
    deleteRow: id => () => console.log('delete row', id),
    changePrice: id => () => console.log('change price', id),
    changeCount: id => () => console.log('change count', id),
    deliveryTypes: [
        {
            id: 0,
            name: 'Самовывоз',
            price: 100.0,
        },
        {
            id: 1,
            name: 'Доставка курьером',
            price: 200.0,
        },
        {
            id: 2,
            name: 'Доставка перевозчиком',
            price: 300.0,
        },
    ],
    deliveryCurrentType: null,
    changeDelivery: () => console.log('change delivery type'),
    deliveryPrice: '345',
    changeDeliveryPrice: () => console.log('change delivery price'),
    totalPrice: 1000,
}
