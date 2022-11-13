const initialState = {
    navItemsConf: {
        items: [
            {
                id: 'mainPage',
                title: 'Головна',
                link: '/',
            },
            {
                id: 'orders',
                title: 'Замовлення',
                link: '/lastOrders',
                subItems: [
                    {
                        id: 'lastOrders',
                        title: 'Нове замовлення',
                        link: '/new-order',
                    },
                ],
                routesWhenItemOpen: ['lastOrder'],
            },
            {
                id: 'catalog',
                title: 'Каталог',
                link: '',
                subItems: [
                    {
                        id: 'categories',
                        title: 'Категорії',
                        link: '/categories',
                    },
                    {
                        id: 'characteristics',
                        title: 'Характеристики',
                        link: '/characteristics',
                    },
                    {
                        id: 'characteristicGroups',
                        title: 'Групи характеристик',
                        link: '/characteristicGroups',
                    },
                    {
                        id: 'characteristicSets',
                        title: 'Набори характеристик',
                        link: '/characteristicSets',
                    },
                    {
                        id: 'goods',
                        title: 'Товари',
                        link: '/goods',
                        subItems: [
                            {
                                id: 'nov',
                                title: 'Новинки',
                                link: '/nov',
                            },
                            {
                                id: 'top_sale',
                                title: 'Топ продаж',
                                link: '/top',
                            },
                            {
                                id: 'slidebar',
                                title: 'Слайдбар',
                                link: '/slidebar',
                            },
                        ],
                    },
                    {
                        id: 'couponsList',
                        title: 'Купони',
                        link: '/couponsList',
                    },
                    {
                        id: 'shares',
                        title: 'Акції',
                        link: '/carousel',
                    },
                ],
            },
            {
                id: 'chart',
                title: 'Статистика',
                link: '/cards',
            },
            {
                id: 'clients',
                title: 'Клієнти',
                link: '/clients/pages/1',
            },
            {
                id: 'dialogs',
                title: 'Диалоги',
                link: '/dialogs',
            },
            {
                id: 'help',
                title: 'Помощь',
                link: '/help',
            },
            {
                id: 'settings',
                title: 'Настройки',
                link: '/settings',
                subItems: [
                    {
                        id: 'design',
                        title: 'Дизайн',
                        link: '/design',
                    },
                    {
                        id: 'menu',
                        title: 'Меню',
                        link: '/create-edit-mega-menu',
                    },
                    {
                        id: 'articles',
                        title: 'Статьи',
                        link: '/articles',
                    },
                    {
                        id: 'files',
                        title: 'Файлы',
                        link: '/files',
                    },
                    {
                        id: 'domains',
                        title: 'Домены',
                        link: '/domains',
                    },
                    {
                        id: 'contacts',
                        title: 'Контакти',
                        link: '/contacts',
                    },
                    {
                        id: 'delivery',
                        title: 'Доставка',
                        link: '/delivery',
                    },
                    {
                        id: 'payment',
                        title: 'Оплата',
                        link: '/checkout',
                    },
                    {
                        id: 'liqPay',
                        title: 'LiqPay',
                        link: '/liqpay-parameters',
                    },
                ],
            },
            {
                id: 'account',
                title: 'Аккаунт',
                link: '/account',
            },
        ],
    },
    saleChannelsConf: {
        header: 'Каналы продаж',
        items: [
            {
                id: 'site',
                title: 'Сайт',
                link: '/site',
                subItems: [
                    {
                        id: 'site.design',
                        title: 'Дизайн',
                        link: '/site/design',
                    },
                    {
                        id: 'catalog.goods',
                        title: 'Товары',
                        link: '/catalog/goods',
                    },
                ],
            },
        ],
    },
    headerItemsConf: {
        logoItem: {
            link: '/',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
            altTextImg: 'logo',
        },
        importExportItem: {
            id: 1,
            menuItems: [
                {
                    id: 'importExportItem0',
                    title: 'Основное',
                    link: '#',
                },
                {
                    id: 'importExportItem1',
                    title: 'Товары',
                    link: '#',
                },
                {
                    id: 'importExportItem2',
                    title: 'Категории',
                    link: '/categoriesList',
                },
                {
                    id: 'importExportItem3',
                    title: 'Производители',
                    link: '#',
                },
                {
                    id: 'importExportItem4',
                    title: 'Клиенты',
                    link: '#',
                },
                {
                    id: 'importExportItem5',
                    title: 'Заказы',
                    link: '#',
                },
                {
                    id: 'importExportItem6',
                    title: 'Планировщик',
                    link: '#',
                },
                {
                    id: 'importExportItem7',
                    title: 'О модуле',
                    link: '#',
                },
            ],
        },
        shopsItem: {
            id: 2,
            menuItems: [
                {
                    id: 0,
                    title: 'Магазин кроссовок',
                    link: '#',
                },
            ],
        },
        helpItem: {
            id: 3,
            menuItems: [
                {
                    id: 0,
                    title: 'Главная',
                    link: '#',
                },
                {
                    id: 1,
                    title: 'Документация',
                    link: '#',
                },
                {
                    id: 2,
                    title: 'Форум',
                    link: '#',
                },
            ],
        },
    },
}

export default initialState
