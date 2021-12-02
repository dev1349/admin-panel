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
                price: 100,
            },
            {
                id: 1,
                name: 'Доставка курьером',
                price: 200,
            },
            {
                id: 2,
                name: 'Доставка перевозчиком',
                price: 300,
            },
        ],
        price: null,
        currentType: null,
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
}

export default initialState
