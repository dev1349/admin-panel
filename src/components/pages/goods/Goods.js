import React from 'react'
import GoodsFilter from '../goodsFilter/GoodsFilterContainer'
import MyGoodsList from '../myGoodsList/MyGoodsList'
import GoodsHeader from '../../molecules/headers/goodsHeader/GoodsHeader'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import Header2 from '../../molecules/headers/header2/Header2'
import ListIcon from '../../atoms/icons/listIcon/ListIcon'
import GreyBorderedWrapper from '../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'
import { useHistory } from 'react-router-dom'
import {
    deleteSelectedGoods,
    getSelectedRowCount,
} from '../../../reducers/goodsSlice'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../molecules/tablePagination/TablePagination'

const Goods = () => {
    const isDeleteButtonDisabled = !useSelector(getSelectedRowCount)

    let history = useHistory()

    const addGoodHandler = () => {
        history.push('/goodAdd')
    }

    const dispatch = useDispatch()
    const deleteGoodHandler = () => {
        dispatch(deleteSelectedGoods)
    }

    return (
        <>
            <MaxWidthTemplate>
                <GoodsHeader
                    title={'Товары'}
                    buttons={{
                        add: {
                            addGood: addGoodHandler,
                        },
                        delete: {
                            deleteGood: deleteGoodHandler,
                            isDeleteButtonDisabled: isDeleteButtonDisabled,
                        },
                    }}
                    breadcrumbs={[
                        {
                            title: 'Главная',
                            link: '/',
                        },
                        {
                            title: 'Товары',
                        },
                    ]}
                />
                <Header2 icon={<ListIcon />}>Список товаров</Header2>
                <GreyBorderedWrapper>
                    <GoodsFilter />
                    <MyGoodsList />
                    <TablePagination />
                </GreyBorderedWrapper>
            </MaxWidthTemplate>
        </>
    )
}

export default Goods
