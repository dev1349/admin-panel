import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SortingTable from '../../organisms/tables/sortingTable/SortingTable'
import Price from '../../atoms/textElements/price/Price'
import HideImageIcon from '../../atoms/icons/hideImageIcon/HideImageIcon'
import CountLabel from '../../atoms/textElements/countLabel/CountLabel'
import {
    clickTableSortLabel,
    getFilteredGoods,
    getGoodChecked,
    getOrder,
    getOrderBy,
    getRowCount,
    getSelectedRowCount,
    selectAllGoods,
    selectGood,
    sortingGoods,
} from '../../../reducers/goodsSlice'
import { useHistory } from 'react-router-dom'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'

const HeadCells = [
    {
        id: 'picture',
        disablePadding: true,
        label: 'Изображение',
        sorting: false,
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Наименование',
        sorting: true,
    },
    {
        id: 'model',
        numeric: false,
        disablePadding: true,
        label: 'Модель',
        sorting: true,
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: true,
        label: 'Цена',
        sorting: true,
    },
    {
        id: 'categorySet',
        numeric: false,
        disablePadding: true,
        label: 'Категория',
        sorting: false,
    },
    {
        id: 'count',
        numeric: true,
        disablePadding: true,
        label: 'Количество',
        sorting: true,
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: true,
        label: 'Статус',
        sorting: true,
    },
]

const printCategory = (categorySet, printArray = []) => {
    if (categorySet.length > 0) {
        const newPrintArray = [...printArray]
        const stringItem = categorySet.reduce(
            (stringItem, category) =>
                stringItem + (stringItem && ' > ') + category.name,
            ''
        )
        newPrintArray.push(stringItem)
        const newCategorySet = categorySet.slice(0, -1)

        return printCategory(newCategorySet, newPrintArray)
    }

    return [...printArray].reverse()
}

const MyGoodsList = () => {
    const filteredGoods = useSelector(getFilteredGoods)

    const goodsForTable = filteredGoods.map(good => ({
        id: good.id,
        picture: good.imageStatus ? (
            <img src={good.imageSrc} alt={'goodPicture'} width={'50'} />
        ) : (
            <HideImageIcon />
        ),
        name: good.name,
        model: good.model,
        price: [
            <Price variant={'span'} key={0} oldPrice>
                {good.salePrice}
            </Price>,
            <br key={1} />,
            <Price variant={'span'} key={2}>
                {good.price}
            </Price>,
        ],
        categorySet: printCategory(good.categorySet).map((item, index) => {
            return (
                <React.Fragment key={index}>
                    {item}
                    <br />
                </React.Fragment>
            )
        }),
        count:
            good.count > 5 ? (
                <CountLabel variant={'span'}>{good.count}</CountLabel>
            ) : (
                <CountLabel variant={'span'} attention={true}>
                    {good.count}
                </CountLabel>
            ),
        status: good.status ? 'Есть в наличии' : 'Нет в наличии',
    }))

    const order = useSelector(getOrder)
    const orderBy = useSelector(getOrderBy)
    const rowCount = useSelector(getRowCount)
    const selectedRowCount = useSelector(getSelectedRowCount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortingGoods())
    }, [dispatch])

    const sortHandler = property => () => {
        dispatch(clickTableSortLabel(property))
    }
    let history = useHistory()
    const editRowHandler = id => () => {
        history.push(`/editGood/${id}`)
    }
    const checkHandler = id => () => {
        dispatch(selectGood(id))
    }
    const isGoodChecked = id => useSelector(getGoodChecked(id))
    const selectAllHandler = () => {
        dispatch(selectAllGoods())
    }

    return (
        <MaxWidthTemplate>
            {goodsForTable.length ? (
                <SortingTable
                    headerCells={HeadCells}
                    tableRows={goodsForTable}
                    order={order}
                    orderBy={orderBy}
                    onClickSortLabel={sortHandler}
                    onCheckRow={checkHandler}
                    rowCount={rowCount}
                    selectedRowCount={selectedRowCount}
                    onCheckAll={selectAllHandler}
                    onEditRow={editRowHandler}
                    isRowChecked={isGoodChecked}
                />
            ) : (
                <div>Нет товаров для отображения...(</div>
            )}
        </MaxWidthTemplate>
    )
}

export default MyGoodsList
