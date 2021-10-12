import React from 'react'
import TableList from './TableList'
import { useSelector } from 'react-redux'
import { getAllCoupons } from '../../../reducers/couponsSlice'

const TableListContainer = () => {
    const coupons = useSelector(getAllCoupons)

    return (
        <TableList
            columnTitle={[
                {
                    id: 0,
                    name: 'name',
                    title: 'Название',
                    canSort: true,
                },
                {
                    id: 1,
                    name: 'code',
                    title: 'Код',
                },
                {
                    id: 2,
                    name: 'discount.value',
                    title: 'Скидка',
                },
                {
                    id: 3,
                    name: 'dateStart',
                    title: 'Дата начала',
                },
                {
                    id: 4,
                    name: 'dateEnd',
                    title: 'Дата окончания',
                },
                {
                    id: 5,
                    name: 'status',
                    title: 'Статус',
                },
                {
                    id: 6,
                    title: 'Действие',
                },
            ]}
            rowItems={coupons}
        />
    )
}

export default TableListContainer
