import React from 'react'
import SortingTable from '../organisms/tables/sortingTable/SortingTable'
import { useDispatch, useSelector } from 'react-redux'
import {
    addAllGroupForDeleting,
    addRemoveIdGroupForDeleting,
    clickTableSortLabel,
    editAttributeGroup,
    getAttributeGroupItems,
    getIsAttributeGroupChecked,
    getOrder,
    getOrderBy,
    getRowCount,
    getSelectedRowCount,
} from '../../reducers/attributeGroupSlice'

const HeadCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Название группы',
        sorting: true,
    },
    {
        id: 'sortOrder',
        numeric: true,
        disablePadding: true,
        label: 'Порядок сортировки',
        sorting: true,
    },
]

const SortingTableContainer = () => {
    const attributeGroupItems = useSelector(getAttributeGroupItems)
    const order = useSelector(getOrder)
    const orderBy = useSelector(getOrderBy)
    const rowCount = useSelector(getRowCount)
    const selectedRowCount = useSelector(getSelectedRowCount)

    const dispatch = useDispatch()
    const sortHandler = property => () => {
        dispatch(clickTableSortLabel(property))
    }
    const selectAllHandler = () => {
        dispatch(addAllGroupForDeleting())
    }
    const isAttributeGroupChecked = id =>
        useSelector(getIsAttributeGroupChecked(id))
    const checkHandler = id => () => {
        dispatch(addRemoveIdGroupForDeleting(id))
    }
    const clickEditAttributeGroupHandler = id => () => {
        dispatch(editAttributeGroup(id))
    }

    return (
        <SortingTable
            headCells={HeadCells}
            tableRows={attributeGroupItems}
            order={order}
            orderBy={orderBy}
            clickTableSortLabel={sortHandler}
            checkAttributeGroup={checkHandler}
            rowCount={rowCount}
            selectedRowCount={selectedRowCount}
            clickAllSelectCheckbox={selectAllHandler}
            clickEditAttributeGroup={clickEditAttributeGroupHandler}
            isAttributeGroupChecked={isAttributeGroupChecked}
        />
    )
}

export default SortingTableContainer
