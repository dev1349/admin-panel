import React from 'react'
import StatisticsButton from './StatisticsButton'
import NotificationsIcon from '../../../atoms/icons/notificationsIcon/NotificationsIcon'

export default {
    title: 'molecules/buttons/StatisticsButton',
    component: StatisticsButton,
}

const Template = args => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <StatisticsButton
            {...args}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
        />
    )
}

export const Example1 = Template.bind({})
Example1.args = {
    children: <NotificationsIcon />,
    id: 0,
    anchorEl: null,
    handleClick: () => console.log('menu click'),
    handleClose: () => console.log('menu close'),
    menuItems: [
        {
            id: 1,
            title: 'Заказы',
            subItems: [
                {
                    id: 11,
                    title: 'В прогрессе',
                    count: 2,
                },
                {
                    id: 12,
                    title: 'Завершено',
                    count: 5,
                },
                {
                    id: 13,
                    title: 'Возвраты',
                    count: 5,
                },
            ],
        },
        {
            id: 2,
            title: 'Покупатели',
            subItems: [
                {
                    id: 21,
                    title: 'Онлайн',
                    count: 2,
                },
                {
                    id: 22,
                    title: 'В ожидании',
                    count: 0,
                },
            ],
        },

        {
            id: 3,
            title: 'Товары',
            subItems: [
                {
                    id: 31,
                    title: 'Нет в наличии',
                    count: 2,
                },
                {
                    id: 32,
                    title: 'Отзывы',
                    count: 0,
                },
            ],
        },
        {
            id: 4,
            title: 'Магазин ',
            subItems: [
                {
                    id: 41,
                    title: 'Отзывы о магазине',
                    count: 2,
                },
                {
                    id: 42,
                    title: 'Заказ обратн. звонка',
                    count: 15,
                },

                {
                    id: 43,
                    title: 'Вопросы о товарах',
                    count: 0,
                },
                {
                    id: 44,
                    title: 'Комментарии',
                    count: 0,
                },
            ],
        },
        {
            id: 5,
            title: 'Партнерская программа',
            subItems: [
                {
                    id: 55,
                    title: 'В ожидании',
                    count: 2,
                },
            ],
        },
    ],
}
