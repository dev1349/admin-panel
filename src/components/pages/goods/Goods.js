import React, { useCallback, useEffect, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
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
import { useQuery } from '../../../hooks/useQuery'
import { useDeleteGoodMutation, useGetGoodsQuery } from '../../../api/goodsApi'

const GoodsPage = () => {
    const [addressBarQuery, setAddressBarQuery] = useState(null)

    const {
        partialGoods,
        totalPages,
        pageSize,
        pageNumber,
        totalGoods,
        isLoading: isGoodsLoading,
        isFetching: isGoodsFetching,
        isError: isGetGoodsError,
    } = useGetGoodsQuery(addressBarQuery, {
        skip: addressBarQuery === null,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            partialGoods: data?.partialGoods,
            totalPages: data?.totalPages,
            pageSize: data?.pageSize,
            pageNumber: data?.pageNumber,
            totalGoods: data?.totalGoods,
            isLoading,
            isFetching,
            isError,
        }),
    })

    const [deleteGood, { isError: isDeleteGoodError, isLoading: isGoodDeleting }] = useDeleteGoodMutation()

    const query = useQuery()

    const getGoodsFromAddressBar = async () => {
        const pageNo = query.get('pageNo')
        const pageSize = query.get('pageSize')

        if (pageNo === null && pageSize === null) {
            setAddressBarQuery('')
            return
        }
        if (pageNo === null && pageSize !== null) {
            setAddressBarQuery(`?pageSize=${pageSize}`)
            return
        }
        if (pageNo !== null && pageSize === null) {
            setAddressBarQuery(`?pageNo=${pageNo}`)
            return
        }
        if (pageNo !== null && pageSize !== null) {
            setAddressBarQuery(`?pageNo=${pageNo}&pageSize=${pageSize}`)
        }
    }

    useEffect(getGoodsFromAddressBar, [query, setAddressBarQuery])

    const saveToLocalStoragePageSizePageNumber = useCallback(() => {
        localStorage.setItem('adminGoodsPageSize', pageSize)
        localStorage.setItem('adminGoodsPageNumber', pageNumber)
    }, [pageSize, pageNumber])

    useEffect(saveToLocalStoragePageSizePageNumber, [saveToLocalStoragePageSizePageNumber])

    let history = useHistory()

    const defaultPageSize = 25

    const handleClickToPaginationItem = (event, page) => {
        setSelectedGoods([])

        if (pageSize === null && page - 1 === 0) {
            history.push(`/goods`)
            return
        }
        if (pageSize === null && page - 1 > 0) {
            history.push(`/goods?pageNo=${page - 1}`)
            return
        }
        if (pageSize && pageSize === defaultPageSize && page - 1 === 0) {
            history.push(`/goods`)
            return
        }
        if (pageSize && page - 1 === 0) {
            history.push(`/goods?pageSize=${pageSize}`)
            return
        }
        if (pageSize && pageSize === defaultPageSize && page - 1 > 0) {
            history.push(`/goods?pageNo=${page - 1}`)
            return
        }
        if (pageSize && page - 1 > 0) {
            history.push(`/goods?pageNo=${page - 1}&pageSize=${pageSize}`)
        }
    }

    const handleAddNewGood = () => {
        history.push('/addGood')
    }

    const handleRequestSort = property => () => console.log('sorting by ', property)

    const [selectedGoods, setSelectedGoods] = useState([])

    const isIndeterminate = selectedGoods.length > 0 && selectedGoods.length < partialGoods?.length

    const isChecked = selectedGoods.length > 0 && selectedGoods.length === partialGoods?.length

    const handleSelectAllGoods = () => {
        if (isChecked) {
            setSelectedGoods([])
            return
        }

        if (partialGoods) {
            setSelectedGoods([...partialGoods.map(good => good.id)])
        }
    }

    const handleSelectGood = id => () => {
        const index = selectedGoods.findIndex(goodId => goodId === id)

        if (index === -1) {
            setSelectedGoods(prev => [...prev, id])
        } else {
            setSelectedGoods(prev => [...prev.filter(goodId => goodId !== id)])
        }
    }

    const handleEditGood = id => () => history.push(`/editGood/${id}`)

    const isPending = isGoodsLoading || isGoodsFetching || isGoodDeleting

    const isAddEditButtonDisabled = isPending

    const [isShowServerErrorModal, setIsShowServerErrorModal] = useState(false)

    const handleCloseServerErrorModal = () => {
        setIsShowServerErrorModal(false)
    }

    useEffect(() => {
        if (isDeleteGoodError || isGetGoodsError) setIsShowServerErrorModal(true)
    }, [isDeleteGoodError, isGetGoodsError, setIsShowServerErrorModal])

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false)
    }

    const handleDeleteGoods = async () => {
        handleCloseDeleteModal()

        const unselectGoods = id => {
            setSelectedGoods(prev => [...prev.filter(goodId => goodId !== id)])
        }

        const forDeletingGoodsCount = selectedGoods.length

        await Promise.all(
            selectedGoods.map(async selectedGoodId => {
                await deleteGood(selectedGoodId)
                    .unwrap()
                    .then(() => unselectGoods(selectedGoodId))
                    .catch(error => console.log(error))
            })
        )

        const totalPageNumberAfterDeleting = Math.floor((totalGoods - forDeletingGoodsCount) / pageSize)

        if (pageNumber > totalPageNumberAfterDeleting) {
            history.push(`/goods?pageNo=${totalPageNumberAfterDeleting}&pageSize=${pageSize}`)
        }
    }

    const isDeleteButtonDisabled = isPending || selectedGoods.length === 0

    const handleChangeItemsPerPage = pageSize => {
        setSelectedGoods([])

        if (pageSize === defaultPageSize) {
            history.push(`/goods`)
            return
        }

        history.push(`/goods?pageSize=${pageSize}`)
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
                    goods={partialGoods}
                    selectedGoods={selectedGoods}
                    onSelect={handleSelectGood}
                    onEditGood={handleEditGood}
                    isEditButtonDisabled={isAddEditButtonDisabled}
                    pathToImage={`${SERVER_PATH}/img/`}
                    goodStateItems={goodStateItems}
                    totalPages={totalPages}
                    currentPage={pageNumber + 1}
                    onPaginationItemClick={handleClickToPaginationItem}
                    isPaginationDisabled={isPending}
                    itemsPerPage={pageSize}
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
                    open={isShowServerErrorModal}
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
