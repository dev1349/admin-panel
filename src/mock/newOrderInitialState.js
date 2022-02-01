import { citiesFromHH } from './cities'

const allCities = citiesFromHH.areas.map(city => {
    if (!city.areas.length) {
        return {
            city: city.name,
            district: null,
            region: null,
        }
    }
    return city.areas.map(subCity => {
        return {
            city: subCity.name,
            district: null,
            region: city.name,
        }
    })
})

let cities = []

for (let el of allCities) {
    if (!Array.isArray(el)) {
        cities = [...cities, el]
    } else {
        cities = [...cities, ...el]
    }
}

cities.sort((first, second) => {
    if (first.city > second.city) {
        return 1
    } else {
        return -1
    }
})

export const exportCities = cities

const initialState = {
    goodsInOrder: [
        {
            id: 100,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3001,
            name: 'Товар 01',
            price: 2365.0,
            weight: 1.0,
            count: 1,
        },
        {
            id: 101,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3002,
            name: 'Товар 02',
            price: 4523.0,
            weight: 3.0,
            count: 1,
        },
        {
            id: 102,
            imgSrc: '',
            vendorCode: 3003,
            name: 'Товар 03',
            price: 800.5,
            weight: 1.0,
            count: 3,
        },
        {
            id: 103,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3004,
            name: 'Товар 04',
            price: 1490.0,
            weight: 2.0,
            count: 2,
        },
        {
            id: 104,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3005,
            name: 'Товар 05',
            price: 11254.8,
            weight: 4.0,
            count: 1,
        },
    ],
    discount: null,
    creationDate: null,
    salesmanComment: null,
    delivery: {
        types: [
            {
                id: 0,
                name: 'Самовывоз',
            },
            {
                id: 1,
                name: 'Доставка курьером',
            },
            {
                id: 2,
                name: 'Доставка перевозчиком',
            },
        ],
        price: null,
        currentType: 'Самовывоз',
    },
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
    fields: {
        clientName: null,
        clientPhone: null,
        clientEmail: null,
        hasDelivery: false,
        clientAddress: null,
        clientCity: null,
        clientDeliveryDateTime: {
            date: null,
            timeFromHours: null,
            timeFromMinutes: null,
            timeToHours: null,
            timeToMinutes: null,
        },
        comments: null,
    },
    cities: cities,
    statusTypes: [
        {
            id: 0,
            value: 'Новый',
            label: 'Новый',
        },
        {
            id: 1,
            value: 'В обработке',
            label: 'В обработке',
        },
        {
            id: 2,
            value: 'Согласован',
            label: 'Согласован',
        },
        {
            id: 3,
            value: 'Отгружен',
            label: 'Отгружен',
        },
        {
            id: 4,
            value: 'Доставлен',
            label: 'Доставлен',
        },
        {
            id: 5,
            value: 'Отменен',
            label: 'Отменен',
        },
        {
            id: 6,
            value: 'Возврат',
            label: 'Возврат',
        },
    ],
    paymentTypes: [
        {
            id: 0,
            value: 'Наличными курьеру',
            label: 'Наличными курьеру',
        },
        {
            id: 1,
            value: 'Оплата на карту',
            label: 'Оплата на карту',
        },
        {
            id: 2,
            value: 'Безналичная оплата',
            label: 'Безналичная оплата',
        },
        {
            id: 3,
            value: 'Наложеный платеж',
            label: 'Наложеный платеж',
        },
    ],
    currentOrderStatus: 'Новый',
    currentPaymentStatus: 'Оплата на карту',
    isPayed: false,
}

export default initialState
