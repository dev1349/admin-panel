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

const initialState = {
    goodsInOrder: [
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
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/235450119.jpg',
            vendorCode: 3005,
            name: 'Товар 05',
            price: 11254.8,
            weight: 4.0,
            count: 1,
        },
    ],
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
}

export default initialState
