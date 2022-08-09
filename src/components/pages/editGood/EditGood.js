import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeFetchStatus,
    changePostPutDeleteFetchStatus,
    getAllCategories,
    getCategories,
    getCategory,
    getFetchPostPutDeleteStatus,
    getFetchStatus,
} from '../../../reducers/categoriesSlice'
import {
    changeToObjectWithId,
    createValueForUpdating,
    leaveIdOnlyInObject,
    transformStringValueToFloat,
} from '../../../common/preparingDataForSending/preparingDataForSending'
import { findCategoryById } from '../addCategory/categoryOperations'
import {
    changeGetPostPutDeleteCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    saveCharacteristicNewValues,
} from '../../../reducers/characteristicsSlice'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddGood from '../../organisms/addGood/AddGood'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import MainTab from '../../organisms/addGood/mainTab/MainTab'
import goodStateItems from '../addGood/goodStateItems'
import { SERVER_PATH } from '../../../api/apiConstants'
import CharacteristicsTab from '../../organisms/addGood/characteristicsTab/CharacteristicsTab'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import { createValue } from '../../molecules/characteristicSetContainer/createCharacteristicValueItems'
import { useGetGoodQuery, useUpdateGoodMutation } from '../../../api/goodsApi'
import { useAddImageMutation, useDeleteImageMutation, useGetImagesQuery } from '../../../api/imagesApi'

const initialGoodProperties = {
    id: null,
    name: null,
    description: null,
    goodState: null,
    price: null,
    discountPrice: null,
    amount: null,
    category: null,
    images: null,
}

const EditGood = () => {
    const { goodId } = useParams()

    const {
        data: good,
        isLoading: isGoodLoading,
        isFetching: isGoodFetching,
        isError: isGoodError,
    } = useGetGoodQuery(goodId, {
        skip: !goodId,
    })

    const [goodPropertiesFromServer, setGoodPropertiesFromServer] = useState(null)

    const [changedGoodProperties, setChangedGoodProperties] = useState(null)

    useEffect(async () => {
        if (!good) return

        setGoodPropertiesFromServer(good)
        setChangedGoodProperties(good)
    }, [good, setGoodPropertiesFromServer, setChangedGoodProperties])

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

    const categories = useSelector(getCategories)

    const [updateGood, { isError: isUpdateGoodError, isLoading: isGoodUpdating }] = useUpdateGoodMutation()

    const valueForUpdating = () => {
        let preparedChangedGoodsValues = goodProperties

        preparedChangedGoodsValues = transformStringValueToFloat(preparedChangedGoodsValues, ['price', 'discountPrice'])

        if (preparedChangedGoodsValues.images) {
            preparedChangedGoodsValues = leaveIdOnlyInObject(preparedChangedGoodsValues, ['image'])
        }
        if (!preparedChangedGoodsValues.images) {
            preparedChangedGoodsValues.images = []
        }

        if (goodProperties['category'] !== null) {
            const selectedCategory = findCategoryById(categories, goodProperties['category'])
            if (selectedCategory) {
                preparedChangedGoodsValues.category = { id: selectedCategory.id }
                preparedChangedGoodsValues.characteristicValues = Object.keys(valuesFromCharacteristicSelects).map(key =>
                    JSON.parse(valuesFromCharacteristicSelects[key])
                )
                preparedChangedGoodsValues = changeToObjectWithId(preparedChangedGoodsValues, ['characteristic'])
            }
        }

        let preparedInitialGoodsValues = changeToObjectWithId(leaveIdOnlyInObject(goodPropertiesFromServer, ['category', 'image']), [
            'characteristic',
        ])

        return createValueForUpdating(preparedInitialGoodsValues, preparedChangedGoodsValues, [], {
            default: 'DELETE_FROM_PARENT',
            images: 'HARD_DELETE',
        })
    }

    const handleSaveChangedGood = async () => {
        console.log(valueForUpdating())

        updateGood(valueForUpdating())
            .unwrap()
            .then(() => {
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
            })
            .catch(error => console.log(error))
    }

    const { tabLabel } = useParams()

    const categoryFetchStatus = useSelector(getFetchStatus)

    const [goodProperties, setGoodProperties] = useState(initialGoodProperties)

    useEffect(() => {
        if (changedGoodProperties === null) return

        setGoodProperties(prev => ({
            ...prev,
            id: changedGoodProperties.id,
            name: changedGoodProperties.name,
            description: changedGoodProperties.description,
            goodState: changedGoodProperties.goodState,
            price: changedGoodProperties.price,
            discountPrice: changedGoodProperties.discountPrice,
            amount: changedGoodProperties.amount,
            images: changedGoodProperties.images.map(image => ({
                id: image.id,
                image: image.image,
                isMain: image.isMain,
                good: image.good,
            })),
        }))
    }, [changedGoodProperties, setGoodProperties])

    useEffect(() => {
        if (changedGoodProperties === null || categoryFetchStatus !== 'success' || changedGoodProperties.category === null) return

        setGoodProperties(prev => ({
            ...prev,
            category: changedGoodProperties.category.id,
        }))
    }, [changedGoodProperties, categoryFetchStatus, setGoodProperties])

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
        const mainImageId =
            goodProperties.images && goodProperties.images.length ? goodProperties.images.find(image => image.isMain).image.id : null

        if (mainImageId) {
            const changedImageIds = changedImageList.map(currentImage => currentImage.id)
            const isMainImageInNewImages = changedImageIds.includes(mainImageId)
            const presentImages = goodProperties.images.filter(currentImage => changedImageIds.includes(currentImage.image.id))

            const newImages = changedImageList
                .filter(
                    currentChangedImage => !goodProperties.images.find(currentImage => currentImage.image.id === currentChangedImage.id)
                )
                .map(currentImage => ({ image: currentImage, isMain: false }))

            setGoodProperties(prev => ({
                ...prev,
                images: isMainImageInNewImages
                    ? [...presentImages, ...newImages]
                    : [...presentImages, ...newImages].map((currentImage, index) => ({ ...currentImage, isMain: index === 0 })),
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
            const imagesCopy = prev.images.map(image => {
                const imageCopy = { ...image }
                imageCopy.isMain = false
                return imageCopy
            })
            const mainImage = prev.images.find(image => image.image.id === id)
            mainImage.isMain = true
            const mainImageIndex = prev.images.findIndex(image => image.image.id === id)
            imagesCopy[mainImageIndex] = mainImage
            return {
                ...prev,
                images: imagesCopy,
            }
        })
    }

    const categoryGetPostPutDeleteFetchStatus = useSelector(getFetchPostPutDeleteStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (categoryFetchStatus !== 'idle') return
        dispatch(getAllCategories())
    }, [categoryFetchStatus, dispatch, getAllCategories])

    const isGoodsNameEmpty = goodProperties.name ? !goodProperties.name.trim() : true

    const [valuesFromCharacteristicSelects, setValuesFromCharacteristicSelects] = useState({})

    useEffect(() => {
        if (
            changedGoodProperties === null ||
            categoryFetchStatus !== 'success' ||
            changedGoodProperties.category === null ||
            changedGoodProperties.characteristicValues === null ||
            changedGoodProperties.characteristicValues.length === 0
        )
            return
        const preparedValuesForCharacteristicSelects = {}
        changedGoodProperties.characteristicValues.forEach(
            characteristicValue =>
                (preparedValuesForCharacteristicSelects[characteristicValue.characteristic] = createValue(characteristicValue))
        )
        setValuesFromCharacteristicSelects(preparedValuesForCharacteristicSelects)
    }, [changedGoodProperties, categoryFetchStatus, setValuesFromCharacteristicSelects])

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

    const presentImageIds =
        goodPropertiesFromServer && goodPropertiesFromServer['images'] && goodPropertiesFromServer['images'] !== 0
            ? goodPropertiesFromServer['images'].map(currentImage => currentImage.image.id)
            : []

    const isDeleteImageButtonDisabled = id => isPaginationDisabled || addedImageIds.includes(id) || presentImageIds.includes(id)

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
        isUpdateGoodError ||
        isGetImagesError ||
        isAddNewImageError ||
        isGoodError

    const isPending =
        categoryFetchStatus === 'pending' ||
        categoryGetPostPutDeleteFetchStatus === 'pending' ||
        characteristicGetGetPostPutDeleteFetchStatus === 'pending' ||
        isGoodUpdating ||
        isImagesLoading ||
        isImagesFetching ||
        isNewImageAdding ||
        isImageDeleting ||
        isGoodLoading ||
        isGoodFetching

    const isGoBackButtonDisabled = isPending

    const isSaveButtonDisabled = isPending || isGoodsNameEmpty || !valueForUpdating()

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
                        <IconButton key={1} dialogButton disableRipple onClick={handleSaveChangedGood} disabled={isSaveButtonDisabled}>
                            <SaveIcon dialogIcon />
                        </IconButton>,
                    ]}
                    urlPathToAddGoodPage={`/editGood/${goodId}`}
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

export default EditGood
