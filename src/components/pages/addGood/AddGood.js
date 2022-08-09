import React, { useEffect, useMemo, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddGood from '../../organisms/addGood/AddGood'
import MainTab from '../../organisms/addGood/mainTab/MainTab'
import { useHistory, useParams } from 'react-router-dom'
import {
    changeFetchStatus,
    changePostPutDeleteFetchStatus,
    getAllCategories,
    getCategories,
    getCategory,
    getFetchPostPutDeleteStatus,
    getFetchStatus,
} from '../../../reducers/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../molecules/loader/Loader'
import CharacteristicsTab from '../../organisms/addGood/characteristicsTab/CharacteristicsTab'
import {
    changeToObjectWithId,
    deleteNullValuesFromObject,
    leaveIdOnlyInObject,
} from '../../../common/preparingDataForSending/preparingDataForSending'
import { findCategoryById } from '../addCategory/categoryOperations'
import {
    changeGetPostPutDeleteCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    saveCharacteristicNewValues,
} from '../../../reducers/characteristicsSlice'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import { SERVER_PATH } from '../../../api/apiConstants'
import goodStateItems from './goodStateItems'
import { useAddGoodMutation } from '../../../api/goodsApi'
import { useAddImageMutation, useDeleteImageMutation, useGetImagesQuery } from '../../../api/imagesApi'

const initialGoodProperties = {
    name: null,
    description: null,
    goodState: null,
    price: null,
    discountPrice: null,
    amount: 1,
    category: null,
    images: null,
}

const AddGoodPage = () => {
    const [addNewGood, { isError: isAddNewGoodError, isLoading: isNewGoodAdding }] = useAddGoodMutation()

    let history = useHistory()

    const handleGoBackToGoods = () => {
        const goodsPageSize = localStorage.getItem('adminGoodsPageSize')
        const goodsPageNumber = localStorage.getItem('adminGoodsPageNumber')

        if (goodsPageSize && parseInt(goodsPageNumber) > 0) {
            history.push(`/goods?pageNo=${goodsPageNumber}&pageSize=${goodsPageSize}`)
            return
        }

        if (goodsPageSize && parseInt(goodsPageNumber) === 0) {
            history.push(`/goods?pageSize=${goodsPageSize}`)
            return
        }

        history.push(`/goods`)
    }

    const dispatch = useDispatch()

    const categories = useSelector(getCategories)

    const createValueForNewGoodSaving = goodProperties => {
        let preparedGoodsValues = deleteNullValuesFromObject(goodProperties)

        if (preparedGoodsValues.images) {
            preparedGoodsValues = leaveIdOnlyInObject(preparedGoodsValues, ['image'])
        }

        if (goodProperties['category'] === null) return preparedGoodsValues

        const selectedCategory = findCategoryById(categories, goodProperties['category'])
        if (selectedCategory) {
            preparedGoodsValues.category = { id: selectedCategory.id }
            preparedGoodsValues.characteristicValues = Object.keys(valuesFromCharacteristicSelects).map(key =>
                JSON.parse(valuesFromCharacteristicSelects[key])
            )
            preparedGoodsValues = changeToObjectWithId(preparedGoodsValues, ['characteristic'])
        }

        return preparedGoodsValues
    }

    const handleSaveNewGood = async () => {
        const preparedGoodsValues = createValueForNewGoodSaving(goodProperties)

        await addNewGood(preparedGoodsValues)

        const goodsPageSize = localStorage.getItem('adminGoodsPageSize')
        if (goodsPageSize) {
            history.push(`/goods?pageSize=${goodsPageSize}`)
            return
        }
        history.push(`/goods`)
    }

    const { tabLabel } = useParams()

    const [goodProperties, setGoodProperties] = useState(initialGoodProperties)

    const handleSetGoodProperties = payload => {
        setGoodProperties(prev => ({
            ...prev,
            ...payload,
        }))

        if (payload.category) {
            setValuesFromCharacteristicSelects({})
        }
    }

    const addImagesToGood = changedImageList => {
        const mainImageId = goodProperties.images ? goodProperties.images.find(image => image.isMain).image.id : null
        const changedImageIds = changedImageList.map(currentImage => currentImage.id)

        if (mainImageId && changedImageIds.includes(mainImageId)) {
            const addingImages = changedImageList.map(currentImage => ({ image: currentImage, isMain: currentImage.id === mainImageId }))

            setGoodProperties(prev => ({
                ...prev,
                images: addingImages,
            }))
            return
        }

        if (mainImageId && !changedImageIds.includes(mainImageId)) {
            const addingImages = changedImageList.map((currentImage, index) => ({ image: currentImage, isMain: index === 0 }))

            setGoodProperties(prev => ({
                ...prev,
                images: addingImages,
            }))
            return
        }

        const addingImages = changedImageList.map((currentImage, index) => ({ image: currentImage, isMain: index === 0 }))
        setGoodProperties(prev => ({
            ...prev,
            images: addingImages,
        }))
    }

    const deleteImageFromGood = (id, isMain) => () => {
        setGoodProperties(prev => {
            let imageAfterDeleting = [...prev.images].filter(image => image.image.id !== id)

            if (isMain && imageAfterDeleting.length) {
                let firstMainImage = { ...imageAfterDeleting[0] }
                firstMainImage.isMain = true
                imageAfterDeleting = [firstMainImage, ...imageAfterDeleting.slice(1)]
            }

            return {
                ...prev,
                images: imageAfterDeleting.length ? imageAfterDeleting : null,
            }
        })
    }

    const handleMakeImageAsMain = id => () => {
        setGoodProperties(prev => {
            const changedImages = prev.images.map(currentImage =>
                currentImage.image.id === id ? { ...currentImage, isMain: true } : { ...currentImage, isMain: false }
            )

            return {
                ...prev,
                images: changedImages,
            }
        })
    }

    const categoryFetchStatus = useSelector(getFetchStatus)

    const categoryGetPostPutDeleteFetchStatus = useSelector(getFetchPostPutDeleteStatus)

    useEffect(() => {
        if (categoryFetchStatus !== 'idle') return
        dispatch(getAllCategories())
    }, [categoryFetchStatus, dispatch, getAllCategories])

    const isGoodsNameEmpty = goodProperties.name ? !goodProperties.name.trim() : true

    const [valuesFromCharacteristicSelects, setValuesFromCharacteristicSelects] = useState({})

    const handleSetValuesFromCharacteristicSelects = payload => {
        setValuesFromCharacteristicSelects(prev => ({ ...prev, ...payload }))
    }

    const [activeCharacteristic, setActiveCharacteristic] = useState(null)

    const handleSaveCharacteristicNewValues = characteristic => {
        dispatch(saveCharacteristicNewValues(characteristic))
    }

    const characteristicGetGetPostPutDeleteFetchStatus = useSelector(getGetPostPutDeleteCharacteristicsFetchStatus)

    const handleGetCategoryFromServer = (categoryId, callback) => {
        dispatch(getCategory(categoryId, callback))
    }

    const addedImageIds = useMemo(
        () => (goodProperties.images ? goodProperties.images.map(currentImage => currentImage.image.id) : []),
        [goodProperties.images]
    )

    const addedImages = useMemo(
        () => (goodProperties.images ? goodProperties.images.map(currentImage => currentImage.image) : []),
        [goodProperties.images]
    )

    const isDeleteImageButtonDisabled = id => isPaginationDisabled || addedImageIds.includes(id)

    const [isOpenAddGoodImagesModal, setIsOpenAddGoodImagesModal] = useState(false)

    const handleCloseAddGoodImagesModal = () => {
        setIsOpenAddGoodImagesModal(false)
        if (pageSize) {
            localStorage.setItem('adminGoodImagesPageSize', pageSize)
        }
    }

    const handleOpenAddGoodImagesModal = () => {
        setIsOpenAddGoodImagesModal(true)
        const pageSizeFromLocalStorage = localStorage.getItem('adminGoodImagesPageSize')
        if (pageSizeFromLocalStorage) {
            setImagesQuery(`?pageSize=${pageSizeFromLocalStorage}`)
        }
    }

    const [imagesQuery, setImagesQuery] = useState('')

    const {
        partialImages,
        totalPages,
        pageSize,
        pageNumber,
        totalImages,
        isLoading: isImagesLoading,
        isFetching: isImagesFetching,
        isError: isGetImagesError,
    } = useGetImagesQuery(imagesQuery, {
        skip: !isOpenAddGoodImagesModal && !imagesQuery,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            partialImages: data?.partialImages,
            totalPages: data?.totalPages,
            pageSize: data?.pageSize,
            pageNumber: data?.pageNumber,
            totalGoods: data?.totalImages,
            isLoading,
            isFetching,
            isError,
        }),
    })

    const [addImage, { isError: isAddNewImageError, isLoading: isNewImageAdding }] = useAddImageMutation()

    const [deleteImage, { isError: isDeleteImageError, isLoading: isImageDeleting }] = useDeleteImageMutation()

    const isPaginationDisabled = isImagesLoading || isImagesFetching

    const defaultPageSize = 25

    const handlePaginationItemClick = (event, page) => {
        if (!pageSize && page - 1 === 0) {
            setImagesQuery(``)
            return
        }
        if (!pageSize && page - 1 > 0) {
            setImagesQuery(`?pageNo=${page - 1}`)
            return
        }
        if (pageSize && pageSize === defaultPageSize && page - 1 === 0) {
            setImagesQuery(``)
            return
        }
        if (pageSize && page - 1 === 0) {
            setImagesQuery(`?pageSize=${pageSize}`)
            return
        }
        if (pageSize && pageSize === defaultPageSize && page - 1 > 0) {
            setImagesQuery(`?pageNo=${page - 1}`)
            return
        }

        setImagesQuery(`?pageNo=${page - 1}&pageSize=${pageSize}`)
    }

    const handleChangeImagesPerPage = pageSize => {
        if (pageSize === defaultPageSize) {
            setImagesQuery(``)
            return
        }

        setImagesQuery(`?pageSize=${pageSize}`)
    }

    const isServerError =
        categoryFetchStatus === 'error' ||
        categoryGetPostPutDeleteFetchStatus === 'error' ||
        characteristicGetGetPostPutDeleteFetchStatus === 'error' ||
        isAddNewGoodError ||
        isGetImagesError ||
        isAddNewImageError

    const isPending =
        categoryFetchStatus === 'pending' ||
        categoryGetPostPutDeleteFetchStatus === 'pending' ||
        characteristicGetGetPostPutDeleteFetchStatus === 'pending' ||
        isNewGoodAdding ||
        isImagesLoading ||
        isImagesFetching ||
        isNewImageAdding ||
        isImageDeleting

    const [isShowErrorModal, setIsShowServerErrorModal] = useState(false)

    const handleCloseServerErrorModal = () => {
        if (categoryFetchStatus === 'error') {
            dispatch(changeFetchStatus('idle'))
        }
        if (categoryGetPostPutDeleteFetchStatus === 'error') {
            dispatch(changePostPutDeleteFetchStatus('idle'))
        }
        if (characteristicGetGetPostPutDeleteFetchStatus === 'error') {
            dispatch(changeGetPostPutDeleteCharacteristicsFetchStatus('idle'))
        }

        setIsShowServerErrorModal(false)
    }

    useEffect(() => {
        if (isServerError) {
            setIsShowServerErrorModal(true)
        }
    }, [isServerError])

    const isGoBackButtonDisabled = isPending

    const isSaveButtonDisabled = isPending || isGoodsNameEmpty

    const handleUploadImageToServer = async images => {
        await Promise.all(images.map(image => addImage(image)))

        if (pageSize === defaultPageSize) {
            setImagesQuery(``)
            return
        }

        setImagesQuery(`?pageSize=${pageSize}`)
    }

    const handleDeleteImageFromServer = async id => {
        await deleteImage(id)
            .unwrap()
            .then(() => {
                const totalPageNumberAfterDeleting = Math.floor((totalImages - 1) / pageSize)
                if (pageNumber > totalPageNumberAfterDeleting) {
                    setImagesQuery(`?pageNo=${totalPageNumberAfterDeleting}&pageSize=${pageSize}`)
                }
            })
            .catch(error => console.log(error))
    }

    const [isShowDeleteImageErrorModal, setIsShowDeleteImageErrorModal] = useState(false)

    const handleCloseDeleteImageErrorModal = () => {
        setIsShowDeleteImageErrorModal(false)
    }

    useEffect(() => {
        if (isDeleteImageError) setIsShowDeleteImageErrorModal(true)
    }, [isDeleteImageError])

    return (
        <>
            <MaxWidthTemplate>
                <AddGood
                    icon={<AddIcon dialogIcon />}
                    title={'Добавить товар'}
                    buttons={[
                        <IconButton key={0} dialogButton disableRipple onClick={handleGoBackToGoods} disabled={isGoBackButtonDisabled}>
                            <UndoIcon dialogIcon />
                        </IconButton>,
                        <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewGood} disabled={isSaveButtonDisabled}>
                            <SaveIcon dialogIcon />
                        </IconButton>,
                    ]}
                    urlPathToAddGoodPage={'/addGood'}
                    activeTabLink={tabLabel ? tabLabel : ''}
                    tabs={[
                        {
                            id: 0,
                            label: 'Основные',
                            link: '',
                            tabPanel: (
                                <MainTab
                                    goodProperties={goodProperties}
                                    changeGoodProperties={handleSetGoodProperties}
                                    goodStateItems={goodStateItems}
                                    uploadImageToServer={handleUploadImageToServer}
                                    addImagesToGood={addImagesToGood}
                                    deleteImageFromGood={deleteImageFromGood}
                                    makeImageAsMain={handleMakeImageAsMain}
                                    images={partialImages}
                                    pathToImage={`${SERVER_PATH}/img/`}
                                    imagesPerPage={pageSize}
                                    changeImagesPerPage={handleChangeImagesPerPage}
                                    isPaginationDisabled={isPaginationDisabled}
                                    totalPages={totalPages}
                                    currentPageNumber={pageNumber}
                                    paginationItemClick={handlePaginationItemClick}
                                    deleteImageFromServer={handleDeleteImageFromServer}
                                    isDeleteImageButtonDisabled={isDeleteImageButtonDisabled}
                                    addedImages={addedImages}
                                    isOpenAddGoodImagesModal={isOpenAddGoodImagesModal}
                                    closeAddGoodImagesModal={handleCloseAddGoodImagesModal}
                                    openAddGoodImagesModal={handleOpenAddGoodImagesModal}
                                />
                            ),
                        },
                        {
                            id: 1,
                            label: 'Характеристики',
                            link: 'characteristics',
                            tabPanel: (
                                <CharacteristicsTab
                                    activeCategoryId={goodProperties.category}
                                    changeGoodProperties={handleSetGoodProperties}
                                    categories={categories}
                                    isPending={isPending}
                                    setValuesFromCharacteristicSelects={handleSetValuesFromCharacteristicSelects}
                                    valuesFromCharacteristicSelects={valuesFromCharacteristicSelects}
                                    activeCharacteristic={activeCharacteristic}
                                    setActiveCharacteristic={setActiveCharacteristic}
                                    saveCharacteristicNewValues={handleSaveCharacteristicNewValues}
                                    characteristicGetGetPostPutDeleteFetchStatus={characteristicGetGetPostPutDeleteFetchStatus}
                                    getCategoryFromServer={handleGetCategoryFromServer}
                                />
                            ),
                        },
                    ]}
                />
            </MaxWidthTemplate>
            <ErrorModal
                open={isShowErrorModal}
                onClose={handleCloseServerErrorModal}
                title={'Ошибка сервера'}
                description={'Сервер не может выполнить указанную операцию :('}
            />
            <ErrorModal
                open={isShowDeleteImageErrorModal}
                onClose={handleCloseDeleteImageErrorModal}
                title={'Ошибка сервера'}
                description={'Это изображение уже используется в товаре/ах! Вы не можете его удалить!'}
            />
            {isPending && <Loader dialogProgress />}
        </>
    )
}

export default AddGoodPage
