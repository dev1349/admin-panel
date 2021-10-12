const initialState = {
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
