import React, { useEffect, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import {
    getAllGoodsFromServer,
    getCurrentPageNumber,
    getGoodsFetchStatus,
    getGoodsFromState,
    getPageSize,
    getTotalElements,
    getTotalPages,
    setFetchStatus,
} from '../../../reducers/goodsSlice'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import GoodIcon from '../../atoms/icons/goodIcon/GoodIcon'
import Goods from '../../organisms/goods/Goods'
import headLines from './headLines'
import { SERVER_PATH } from '../../../api/apiConstants'
import goodStateItems from '../addGood/goodStateItems'
import { useHistory } from 'react-router-dom'
import Loader from '../../molecules/loader/Loader'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import { deleteGoodFetch } from '../../../api/goodApi'
import { useQuery } from '../../../hooks/useQuery'

const GoodsPage = () => {
    let history = useHistory()

    const dispatch = useDispatch()

    const query = useQuery()

    const [currentPage, setCurrentPage] = useState(1)

    const getGoodsFromAddressBar = () => {
        const pageNo = query.get('pageNo')
        const pageSize = query.get('pageSize')
        if (pageNo === null && pageSize === null) {
            dispatch(getAllGoodsFromServer('', setCurrentPage, parseInt(pageNo)))
            return
        }
        if (pageNo === null && pageSize !== null) {
            dispatch(getAllGoodsFromServer(`?pageSize=${pageSize}`, setCurrentPage, parseInt(pageNo)))
            return
        }
        if (pageNo !== null && pageSize === null) {
            dispatch(getAllGoodsFromServer(`?pageNo=${pageNo}`, setCurrentPage, parseInt(pageNo)))
            return
        }
        if (pageNo !== null && pageSize !== null) {
            dispatch(getAllGoodsFromServer(`?pageNo=${pageNo}&pageSize=${pageSize}`, setCurrentPage, parseInt(pageNo)))
        }
    }

    useEffect(getGoodsFromAddressBar, [query, dispatch, getAllGoodsFromServer])

    const handleClickToPaginationItem = (event, page) => {
        setSelectedGoods([])
        const pageSize = query.get('pageSize')
        if (pageSize === null) {
            if (page - 1 === 0) {
                history.push(`/goods`)
                return
            }
            history.push(`/goods?pageNo=${page - 1}`)
            return
        }
        if (pageSize) {
            if (page - 1 === 0) {
                history.push(`/goods?pageSize=${pageSize}`)
                return
            }
            history.push(`/goods?pageNo=${page - 1}&pageSize=${pageSize}`)
        }
    }

    const handleAddNewGood = () => history.push('/addGood')

    const isAddEditButtonDisabled = false

    const handleRequestSort = property => () => console.log('sorting by ', property)

    const goods = useSelector(getGoodsFromState)

    const [selectedGoods, setSelectedGoods] = useState([])

    const isIndeterminate = selectedGoods.length > 0 && selectedGoods.length < goods.length

    const isChecked = selectedGoods.length > 0 && selectedGoods.length === goods.length

    const handleSelectAllGoods = () => {
        if (isChecked) {
            setSelectedGoods([])
            return
        }
        setSelectedGoods([...goods.map(good => good.id)])
    }

    const handleSelectGood = id => () => {
        const index = selectedGoods.findIndex(goodId => goodId === id)
        if (index === -1) {
            setSelectedGoods(prev => [...prev, id])
        } else {
            setSelectedGoods(prev => [...prev.filter(goodId => goodId !== id)])
        }
    }

    const handleEditGood = id => () => console.log('edit good...', id)

    const goodFetchStatus = useSelector(getGoodsFetchStatus)

    const isPending = goodFetchStatus === 'pending'

    const isServerError = goodFetchStatus === 'error'

    const handleCloseServerErrorModal = () => {
        dispatch(setFetchStatus('idle'))
        getGoodsFromAddressBar()
    }

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    const totalElements = useSelector(getTotalElements)

    const pageSize = useSelector(getPageSize)

    const currentPageNumber = useSelector(getCurrentPageNumber)

    const handleDeleteGoods = async () => {
        handleCloseDeleteModal()
        const unselectGoods = id => {
            setSelectedGoods(prev => [...prev.filter(goodId => goodId !== id)])
        }
        const forDeletingGoodsCount = selectedGoods.length
        try {
            dispatch(setFetchStatus('pending'))
            await Promise.all(
                selectedGoods.map(async selectedGoodId => {
                    await deleteGoodFetch(selectedGoodId)
                    unselectGoods(selectedGoodId)
                })
            )
            dispatch(setFetchStatus('success'))
            dispatch(setFetchStatus('idle'))
            const totalPageNumberAfterDeleting = Math.floor((totalElements - forDeletingGoodsCount) / pageSize)
            if (currentPageNumber > totalPageNumberAfterDeleting) {
                history.push(`/goods?pageNo=${totalPageNumberAfterDeleting}&pageSize=${pageSize}`)
                return
            }
            dispatch(getAllGoodsFromServer(`?pageNo=${currentPageNumber}&pageSize=${pageSize}`))
        } catch (error) {
            console.log(error)
            dispatch(setFetchStatus('error'))
        }
    }

    const isDeleteButtonDisabled = isPending || selectedGoods.length === 0

    const totalPages = useSelector(getTotalPages)

    const handleChangeItemsPerPage = pageSize => {
        history.push(`/goods?pageSize=${pageSize}`)
        setSelectedGoods([])
    }

    return (
        <>
            <MaxWidthTemplate>
                <Goods
                    icon={<GoodIcon dialogIcon />}
                    title={'Товары'}
                    buttons={[
                        <IconButton key={0} dialogButton disableRipple onClick={handleAddNewGood} disabled={isAddEditButtonDisabled}>
                            <AddIcon />
                        </IconButton>,
                        <IconButton key={1} dialogButton disableRipple onClick={handleOpenDeleteModal} disabled={isDeleteButtonDisabled}>
                            <DeleteIcon />
                        </IconButton>,
                    ]}
                    headLines={headLines(isIndeterminate, isChecked, handleSelectAllGoods)}
                    order={'asc'}
                    orderBy={''}
                    onRequestSort={handleRequestSort}
                    goods={goods}
                    selectedGoods={selectedGoods}
                    onSelect={handleSelectGood}
                    onEditGood={handleEditGood}
                    isEditButtonDisabled={isAddEditButtonDisabled}
                    pathToImage={`${SERVER_PATH}/img/`}
                    goodStateItems={goodStateItems}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPaginationItemClick={handleClickToPaginationItem}
                    isPaginationDisabled={isPending}
                    itemsPerPage={query.get('pageSize') === null ? 25 : parseInt(query.get('pageSize'))}
                    onChangeItemsPerPage={handleChangeItemsPerPage}
                />

                <DeleteModal
                    open={openDeleteModal}
                    onClose={handleCloseDeleteModal}
                    onYes={handleDeleteGoods}
                    title={'Подтверждение удаления'}
                    description={'Вы действительно хотите удалить этот/и товар/ы?'}
                />
                <ErrorModal
                    open={isServerError}
                    onClose={handleCloseServerErrorModal}
                    title={'Ошибка сервера'}
                    description={'Сервер не может выполнить указанную операцию :('}
                />
                {isPending && <Loader dialogProgress />}
            </MaxWidthTemplate>
        </>
    )
}

export default GoodsPage
