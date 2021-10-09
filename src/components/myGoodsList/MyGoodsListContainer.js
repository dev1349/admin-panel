import React from 'react'
import MyGoodsList from './MyGoodsList'
import {ThemeProvider} from 'styled-components'
import {useSelector} from "react-redux";


const MyGoodsListContainer = (props) => {


        const allGoods = useSelector(state => state.goods.allGoods)
        const mainTheme = useSelector(state => state.goods.theme.main)
        const alternativeTheme = useSelector(state => state.goods.theme.alternative)

    return (
        <ThemeProvider theme={mainTheme}>
            <ThemeProvider theme={alternativeTheme}>
                <MyGoodsList
                    allGoods={allGoods}
                    columnsTitle={[
                        {
                            id: 0,
                            title: 'Изображение',
                            sorting: false,
                            name: 'imagePath'
                        },
                        {
                            id: 1,
                            title: 'Наименование товара',
                            sorting: true,
                            name: 'name'
                        },
                        {
                            id: 2,
                            title: 'Модель',
                            sorting: true,
                            name: 'model'
                        },
                        {
                            id: 3,
                            title: 'Цена на сайте',
                            sorting: true,
                            name: 'price'
                        },
                        {
                            id: 4,
                            title: 'Категория',
                            sorting: false,
                            name: 'category'
                        },
                        {
                            id: 5,
                            title: 'Количество',
                            sorting: true,
                            name: 'count'
                        },
                        {
                            id: 6,
                            title: 'Статус',
                            sorting: true,
                            name: 'status'
                        },
                        {
                            id: 7,
                            title: 'Действие',
                            sorting: false,
                        },
                    ]}
                    sortingStatus={props.sortingStatus}
                />
            </ThemeProvider>
        </ThemeProvider>
    )
}

export default MyGoodsListContainer