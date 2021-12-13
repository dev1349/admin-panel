const initialState = {
    navItemsConf: {
        items: [
            {
                id: 'mainPage',
                title: 'Главная',
                label: 3,
                link: '/',
            },
            {
                id: 'orders',
                title: 'Заказы',
                link: '/orders/1',
            },
            {
                id: 'catalog',
                title: 'Каталог',
                link: '/catalog',
                subItems: {
                    items: [
                        {
                            id: 'catalog.category',
                            title: 'Категории',
                            link: '/catalog/category',
                        },
                        {
                            id: 'catalog.goods',
                            title: 'Товары',
                            link: '/catalog/goods',
                        },
                        {
                            id: 'catalog.attributes',
                            title: 'Атрибуты',
                            link: '/catalog/attributes',
                            subItems: {
                                items: [
                                    {
                                        id: 'catalog.attributes.attributes',
                                        title: 'Атрибуты',
                                        link: '/catalog/attributes',
                                    },
                                    {
                                        id: 'catalog.attributes.attributesGroup',
                                        title: 'Группы атрибутов',
                                        link: '/catalog/attributes/attributesGroup',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                id: 'chart',
                title: 'Показатели',
                link: '/chart',
            },
            {
                id: 'clients',
                title: 'Клиенты',
                link: '/clients',
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
                id: 'site',
                title: 'Сайт',
                link: '/site',
                subItems: {
                    items: [
                        {
                            id: 'site.design',
                            title: 'Дизайн',
                            link: '/site/design',
                        },
                        {
                            id: 'site.menu',
                            title: 'Меню и страницы',
                            link: '/site/menu',
                        },
                        {
                            id: 'site.articles',
                            title: 'Статьи',
                            link: '/site/articles',
                        },
                        {
                            id: 'site.files',
                            title: 'Файлы',
                            link: '/site/files',
                        },
                        {
                            id: 'site.domains',
                            title: 'Домены',
                            link: '/site/domains',
                        },
                        {
                            id: 'site.delivery',
                            title: 'Доставка',
                            link: '/site/delivery',
                        },
                        {
                            id: 'site.payment',
                            title: 'Оплата',
                            link: '/site/payment',
                        },
                    ],
                },
            },
            {
                id: 'settings',
                title: 'Настройки',
                link: '/settings',
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
                subItems: {
                    items: [
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
