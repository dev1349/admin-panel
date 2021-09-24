import React from 'react'
import MyGoodList from './MyGoodList'
import {connect} from 'react-redux'
import {ThemeProvider} from 'styled-components'


class MyGoodListContainer extends React.Component {
    render() {
        return (
            <ThemeProvider theme={this.props.mainTheme}>
                <ThemeProvider theme={this.props.alternativeTheme}>
                    <MyGoodList
                        allGood={this.props.allGood}
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
                        sortingStatus={this.props.sortingStatus}
                    />
                </ThemeProvider>
            </ThemeProvider>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        allGood: state.good.allGood,
        mainTheme: state.good.theme.main,
        alternativeTheme: state.good.theme.alternative,
    }
}

export default connect(mapStateToProps)(MyGoodListContainer)