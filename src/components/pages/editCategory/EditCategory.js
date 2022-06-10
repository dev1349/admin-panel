import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCategory from '../../organisms/addCategory/AddCategory'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeFetchStatus,
    changePostPutDeleteFetchStatus,
    closeServerErrorModal,
    getAllCategories,
    getCategories,
    getFetchStatus,
    getIsPending,
    getIsServerError,
} from '../../../reducers/categoriesSlice'
import { getCategoryFetch, putCategoryFetch } from '../../../api/categoriesApi'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import {
    changeToObjectWithId,
    createValueForUpdating,
    leaveIdOnlyInObject,
} from '../../../common/preparingDataForSending/preparingDataForSending'
import { getBehaviorMode } from '../../../reducers/behaviorServerInteraction'
import {
    changeCharacteristicSetsFetchStatus,
    getAllCharacteristicSets,
    getCharacteristicSets,
    getCharacteristicSetsFetchStatus,
} from '../../../reducers/characteristicSetsSlice'
import { setInParentCategoryNames } from '../addCategory/categoryOperations'

const EditCategoryPage = () => {
    let history = useHistory()

    const { categoryId } = useParams()

    const handleGoBackToCategories = () => {
        history.push(`/categories/${categoryId}`)
    }

    const behaviorMode = useSelector(getBehaviorMode)

    const handleSaveChangedCategory = () => {
        dispatch(changePostPutDeleteFetchStatus('pending'))
        const valuesForSend = createValueForUpdating(
            leaveIdOnlyInObject(initialCategoryFieldValues, ['characteristicSets']),
            leaveIdOnlyInObject(categoryFieldValues, ['characteristicSets']),
            ['parentCategory'],
            'DELETE_FROM_PARENT'
        )
        putCategoryFetch(valuesForSend)
            .then(() => {
                dispatch(changePostPutDeleteFetchStatus('success'))
                dispatch(changePostPutDeleteFetchStatus('idle'))
                if (behaviorMode === 'SAFE_MODE') {
                    dispatch(changeFetchStatus('idle'))
                }
                history.push(`/categories/${categoryId}`)
            })
            .catch(() => dispatch(changePostPutDeleteFetchStatus('error')))
    }

    const initialFieldValues = {
        name: null,
        categoryType: 'WITH_CATEGORIES',
        parentCategory: null,
        characteristicSets: [],
    }

    const [categoryFieldValues, setCategoryFieldValues] = useState(initialFieldValues)

    const [initialCategoryFieldValues, setInitialCategoryFieldValues] = useState(null)

    const categories = useSelector(getCategories)

    useEffect(async () => {
        if (!categories?.length) return
        const intCategoryId = parseInt(categoryId)
        if (!intCategoryId) return
        try {
            const category = await getCategoryFetch(intCategoryId)
            setCategoryFieldValues(changeToObjectWithId(category, ['parentCategory'], ['command']))
            setInitialCategoryFieldValues(changeToObjectWithId(category, ['parentCategory'], ['command']))
        } catch (e) {
            console.log(e)
            dispatch(changePostPutDeleteFetchStatus('error'))
        }
    }, [categories, categoryId, getCategoryFetch, setCategoryFieldValues, setInitialCategoryFieldValues, changeToObjectWithId])

    const handleChangeCategoryValue = payload => {
        setCategoryFieldValues({ ...categoryFieldValues, ...payload })
    }

    const handleChangeCategoryType = payload => {
        setCategoryFieldValues(prev => ({
            ...prev,
            categoryType: payload.categoryType ? 'WITH_GOODS' : 'WITH_CATEGORIES',
        }))
        if (!payload.categoryType) {
            setCategoryFieldValues(prev => ({
                ...prev,
                characteristicSets: [],
            }))
        }
    }

    const handleChangeCategoryParent = payload => {
        setCategoryFieldValues(prev => ({
            ...prev,
            parentCategory: payload.parentCategory ? { id: payload.parentCategory } : null,
        }))
    }

    const fetchStatus = useSelector(getFetchStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (fetchStatus !== 'idle') return
        dispatch(getAllCategories())
    }, [fetchStatus, dispatch, getAllCategories])

    const isPending = useSelector(getIsPending)

    const isReturnButtonDisabled = isPending

    const isSaveButtonDisabled =
        isPending ||
        !(categoryFieldValues?.name ? categoryFieldValues?.name.trim() : categoryFieldValues?.name) ||
        initialCategoryFieldValues === null ||
        !createValueForUpdating(initialCategoryFieldValues, categoryFieldValues, ['parentCategory'])

    const isServerError = useSelector(getIsServerError)

    const characteristicSetsFetchStatus = useSelector(getCharacteristicSetsFetchStatus)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
        dispatch(changeFetchStatus('idle'))
        if (characteristicSetsFetchStatus === 'error') {
            dispatch(changeCharacteristicSetsFetchStatus('idle'))
        }
        history.push(`/categories`)
    }

    const isSwitchCategoryTypeDisabled =
        Array.isArray(categoryFieldValues?.subCategories) && categoryFieldValues.subCategories?.length !== 0

    useEffect(() => {
        dispatch(getAllCharacteristicSets())
    }, [dispatch, getAllCharacteristicSets])

    const characteristicSets = useSelector(getCharacteristicSets)

    const setIdsInCategory = categoryFieldValues.characteristicSets.map(set => set.id)

    const isSetInCategory = setId => setIdsInCategory.includes(setId)

    const handleAddRemoveSetInCategory = set => () => {
        if (isSetInCategory(set.id)) {
            setCategoryFieldValues(prev => ({
                ...prev,
                characteristicSets: [...prev.characteristicSets.filter(currentSet => currentSet.id !== set.id)],
            }))
            return
        }
        setCategoryFieldValues(prev => ({
            ...prev,
            characteristicSets: [...prev.characteristicSets, set],
        }))
    }

    return (
        <>
            <AddCategory
                icon={<EditIcon dialogIcon />}
                title={'Редактировать категорию товаров'}
                buttons={[
                    <IconButton key={0} dialogButton onClick={handleGoBackToCategories} disabled={isReturnButtonDisabled}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton onClick={handleSaveChangedCategory} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                categoryFields={categoryFieldValues}
                changeCategoryFieldValues={handleChangeCategoryValue}
                changeCategoryType={handleChangeCategoryType}
                changeCategoryParent={handleChangeCategoryParent}
                categories={categories}
                mode={'editCategory'}
                disabledSwitchCategoryType={isSwitchCategoryTypeDisabled}
                categoryTypeTooltip={
                    'Категория с товарами может содержать только товары! Обычная же категория может содержать в себе только другие категории!'
                }
                sets={characteristicSets}
                handleAddRemoveSetInCategory={handleAddRemoveSetInCategory}
                isSetInCategory={isSetInCategory}
                setInParentCategoryNames={setInParentCategoryNames(categories, categoryFieldValues.parentCategory?.id)}
            />
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

export default EditCategoryPage
