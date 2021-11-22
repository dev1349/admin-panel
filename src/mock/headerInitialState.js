const initialState = {
    headerItemsConf: {
        logoItem: {
            link: '/',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg',
            altTextImg: 'logo',
        },
        importExportItem: {
            id: 0,
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
            id: 1,
            menuItems: [
                {
                    id: 0,
                    title: 'Магазин кроссовок',
                    link: '#',
                },
            ],
        },
        helpItem: {
            id: 2,
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
    headerItems: [
        {
            id: 1,
            title: 'Меню',
            icon: '#menu',
            subMenu: null,
        },
        {
            id: 2,
            title: 'Логотип',
            icon: '#logo',
            subMenu: null,
        },
        {
            id: 3,
            title: null,
            icon: '#import',
            subMenu: {
                title: 'import/export',
                subMenuItems: [
                    {
                        id: 31,
                        title: 'Основное',
                    },
                    {
                        id: 32,
                        title: 'Товары',
                    },
                    {
                        id: 33,
                        title: 'Категории',
                        link: '/categoriesList',
                    },
                    {
                        id: 34,
                        title: 'Производители',
                    },
                    {
                        id: 35,
                        title: 'Клиенты',
                    },
                    {
                        id: 36,
                        title: 'Заказы',
                    },
                    {
                        id: 37,
                        title: 'Планировщик',
                    },
                    {
                        id: 38,
                        title: 'О модуле',
                    },
                ],
            },
        },
        // {
        //     id: 4,
        //     title: null,
        //     icon: '#statistic',
        //     subMenu: null,
        // },
        {
            id: 5,
            title: null,
            icon: '#shops',
            subMenu: {
                title: 'Магазины',
                subMenuItems: [
                    {
                        id: 1,
                        title: 'Магазин кроссовок',
                    },
                ],
            },
        },
        {
            id: 6,
            title: null,
            icon: '#help',
            subMenu: {
                title: 'Помощь',
                subMenuItems: [
                    {
                        id: 61,
                        title: 'Главная',
                    },
                    {
                        id: 62,
                        title: 'Документация',
                    },
                    {
                        id: 63,
                        title: 'Форум',
                    },
                ],
            },
        },
        {
            id: 7,
            title: null,
            icon: '#logout',
            subMenu: null,
        },
    ],
    activeSubMenu: null,
}

export default initialState
