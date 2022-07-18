import React, { useCallback, useEffect, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddGood from '../../organisms/addGood/AddGood'
import MainTab from '../../organisms/addGood/mainTab/MainTab'
import { useParams } from 'react-router-dom'
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
import { postGoodsFetch } from '../../../api/goodApi'
import {
    changeGetPostPutDeleteCharacteristicsFetchStatus,
    getGetPostPutDeleteCharacteristicsFetchStatus,
    saveCharacteristicNewValues,
} from '../../../reducers/characteristicsSlice'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import { getAllImagesFetch, postImageFetch } from '../../../api/imagesApi'
import { SERVER_PATH } from '../../../api/apiConstants'

const AddGoodPage = () => {
    const handleGoBackToGoods = () => {
        console.log('Go back to all goods ')
    }

    const isGoBAckButtonDisabled = false

    const [goodsFetchStatus, setGoodsFetchStatus] = useState('idle')

    const categories = useSelector(getCategories)

    const handleSaveNewGood = async () => {
        let preparedGoodsValues = deleteNullValuesFromObject(goodProperties)
        if (preparedGoodsValues.images) {
            preparedGoodsValues = leaveIdOnlyInObject(preparedGoodsValues, ['image'])
        }
        if (goodProperties['category'] !== null) {
            const selectedCategory = findCategoryById(categories, goodProperties['category'])
            if (selectedCategory) {
                preparedGoodsValues.category = { id: selectedCategory.id }
                const selectedCharacteristicsValues = Object.keys(valuesFromCharacteristicSelects).map(key =>
                    JSON.parse(valuesFromCharacteristicSelects[key])
                )
                preparedGoodsValues.characteristicValues = selectedCharacteristicsValues
                preparedGoodsValues = changeToObjectWithId(preparedGoodsValues, ['characteristic'])
            }
        }

        setGoodsFetchStatus('pending')
        try {
            await postGoodsFetch(preparedGoodsValues)
            setGoodsFetchStatus('success')
            setGoodsFetchStatus('idle')
        } catch (e) {
            console.log(e)
            setGoodsFetchStatus('error')
        }
    }

    const { tabLabel } = useParams()

    const initialGoodProperties = {
        name: null,
        description: null,
        goodState: null,
        price: null,
        discountPrice: null,
        amount: null,
        category: null,
        images: null,
    }

    const [goodProperties, setGoodProperties] = useState(initialGoodProperties)

    const handleSetGoodProperties = payload => {
        setGoodProperties(prev => ({
            ...prev,
            ...payload,
        }))
    }

    const goodStateItems = [
        { id: 0, label: 'В наличии', value: 'IN_STOCK' },
        { id: 1, label: 'Нет в наличии', value: 'NOT_IN_STOCK' },
        { id: 2, label: 'Под заказ', value: 'UNDER_THE_ORDER' },
        { id: 3, label: 'Ожидается поступление', value: 'DELIVERY_IS_EXPECTED' },
        { id: 4, label: 'Заканчивается', value: 'IS_RUNNING_OUT' },
    ]

    const addImageToGood = id => () => {
        if (goodProperties.images === null || !goodProperties.images.find(image => image.image.id === id)) {
            const image = images.find(image => image.id === id)
            setGoodProperties(prev => {
                if (prev.images === null) {
                    return {
                        ...prev,
                        images: [{ image: image, isMain: true }],
                    }
                }
                return {
                    ...prev,
                    images: [...prev.images, { image: image, isMain: false }],
                }
            })
            return
        }

        const isDeletedImageMain = goodProperties['images'].find(image => image.image.id === id).isMain
        deleteImageFromGood(id, isDeletedImageMain)()
    }

    const deleteImageFromGood = (id, isMain) => () => {
        setGoodProperties(prev => {
            let imagesCopy = [...prev.images]
            imagesCopy = imagesCopy.filter(image => image.image.id !== id)
            if (isMain && imagesCopy.length) {
                let firstMainImage = { ...imagesCopy[0] }
                firstMainImage.isMain = true
                imagesCopy = [firstMainImage, ...imagesCopy.slice(1)]
            }
            return {
                ...prev,
                images: imagesCopy.length ? imagesCopy : null,
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

    const categoryFetchStatus = useSelector(getFetchStatus)

    const categoryGetPostPutDeleteFetchStatus = useSelector(getFetchPostPutDeleteStatus)

    const dispatch = useDispatch()

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
        if (goodsFetchStatus === 'error') {
            setGoodsFetchStatus('idle')
        }
        if (imageFetchStatus === 'error') {
            setImageFetchStatus('idle')
        }
    }

    const handleGetCategoryFromServer = (categoryId, callback) => {
        dispatch(getCategory(categoryId, callback))
    }

    const [images, setImages] = useState(null)

    const [imageFetchStatus, setImageFetchStatus] = useState('idle')

    const isPending =
        categoryFetchStatus === 'pending' ||
        categoryGetPostPutDeleteFetchStatus === 'pending' ||
        characteristicGetGetPostPutDeleteFetchStatus === 'pending' ||
        goodsFetchStatus === 'pending' ||
        imageFetchStatus === 'pending'

    const isServerError =
        categoryFetchStatus === 'error' ||
        categoryGetPostPutDeleteFetchStatus === 'error' ||
        characteristicGetGetPostPutDeleteFetchStatus === 'error' ||
        goodsFetchStatus === 'error' ||
        imageFetchStatus === 'error'

    const isSaveButtonDisabled = isPending || isGoodsNameEmpty

    const handleGetImagesFromServer = useCallback(async () => {
        setImageFetchStatus('pending')
        try {
            let images = await getAllImagesFetch()
            setImages(images.content)
            setImageFetchStatus('success')
            setImageFetchStatus('idle')
        } catch (e) {
            console.log(e)
            setImageFetchStatus('error')
        }
    }, [])

    const handleUploadImageToServer = async allData => {
        setImageFetchStatus('pending')
        try {
            await Promise.all(allData.map(data => postImageFetch(data)))
            setImageFetchStatus('success')
            setImageFetchStatus('idle')
            handleGetImagesFromServer()
        } catch (error) {
            console.log(error)
            setImageFetchStatus('error')
        }
    }

    return (
        <>
            <MaxWidthTemplate>
                <AddGood
                    icon={<AddIcon dialogIcon />}
                    title={'Добавить товар'}
                    buttons={[
                        <IconButton key={0} dialogButton disableRipple onClick={handleGoBackToGoods} disabled={isGoBAckButtonDisabled}>
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
                                    addImageToGood={addImageToGood}
                                    deleteImageFromGood={deleteImageFromGood}
                                    makeImageAsMain={handleMakeImageAsMain}
                                    images={images}
                                    getImagesFromServer={handleGetImagesFromServer}
                                    pathToImage={`${SERVER_PATH}/img/`}
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
                open={isServerError}
                onClose={handleCloseServerErrorModal}
                title={'Ошибка сервера'}
                description={'Сервер не может выполнить указанную операцию :('}
            />
            {isPending && <Loader dialogProgress />}
        </>
    )
}

export default AddGoodPage
