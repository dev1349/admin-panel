import React, { useState } from 'react'
import Tabs from './Tabs'

const TabsContainer = ({ children }) => {
    const tabTitles = [
        {
            id: 0,
            name: 'Общие',
        },
        {
            id: 1,
            name: 'Данные',
        },
        {
            id: 2,
            name: 'Связи',
        },
        {
            id: 3,
            name: 'Атрибуты',
        },
        {
            id: 4,
            name: 'Опции',
        },
        {
            id: 5,
            name: 'Регулярные платежи',
        },
        {
            id: 6,
            name: 'Скидки',
        },
        {
            id: 7,
            name: 'Акции',
        },
        {
            id: 8,
            name: 'Изображения',
        },
        {
            id: 9,
            name: 'Бонусные баллы',
        },
        {
            id: 10,
            name: 'Дизайн',
        },
        {
            id: 11,
            name: 'Дополнительные вкладки',
        },
    ]

    const [activeTab, setActiveTab] = useState(0)

    return (
        <Tabs
            titles={tabTitles}
            activeTab={activeTab}
            onChangeActiveTab={setActiveTab}
        >
            {children}
        </Tabs>
    )
}

export default TabsContainer
