import React, { useEffect, useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCategory from '../../organisms/addCategory/AddCategory'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    addNewCategory,
    changePostPutDeleteFetchStatus,
    closeServerErrorModal,
    getAllCategories,
    getCategories,
    getFetchStatus,
    getIsPending,
    getIsServerError,
} from '../../../reducers/categoriesSlice'
import { postCategoryFetch } from '../../../api/categoriesApi'
import { findCategoryById } from './categoryOperations'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import { deleteNullValuesFromObject, leaveIdOnlyInObject } from '../../../common/preparingDataForSending/preparingDataForSending'
import { getBehaviorMode } from '../../../reducers/behaviorServerInteraction'
import {
    changeCharacteristicSetsFetchStatus,
    getAllCharacteristicSets,
    getCharacteristicSets,
    getCharacteristicSetsFetchStatus,
} from '../../../reducers/characteristicSetsSlice'

const AddCategoryPage = () => {
    let history = useHistory()

    const { parentCategoryId } = useParams()

    const fetchStatus = useSelector(getFetchStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        if (fetchStatus !== 'idle') return
        dispatch(getAllCategories())
    }, [fetchStatus, dispatch, getAllCategories])

    const handleGoBackToCategories = () => {
        history.push(parentCategoryId ? `/categories/${parentCategoryId}` : `/categories`)
    }

    const behaviorMode = useSelector(getBehaviorMode)

    const handleSaveNewCategory = () => {
        dispatch(changePostPutDeleteFetchStatus('pending'))
        postCategoryFetch(leaveIdOnlyInObject(deleteNullValuesFromObject(categoryFieldValues), ['characteristicSets']))
            .then(response => {
                dispatch(changePostPutDeleteFetchStatus('success'))
                dispatch(changePostPutDeleteFetchStatus('idle'))
                if (behaviorMode === 'FAST_MODE') {
                    dispatch(addNewCategory(response))
                }
                if (behaviorMode === 'SAFE_MODE') {
                    dispatch(getAllCategories())
                }
                history.push(response.id ? `/categories/${response.id}` : `/categories`)
            })
            .catch(() => {
                dispatch(changePostPutDeleteFetchStatus('error'))
                if (behaviorMode === 'SAFE_MODE') {
                    dispatch(getAllCategories())
                }
            })
    }

    const initialFieldValues = {
        name: null,
        categoryType: 'WITH_CATEGORIES',
        parentCategory: null,
        characteristicSets: [],
    }

    const [categoryFieldValues, setCategoryFieldValues] = useState(initialFieldValues)

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

    const categories = useSelector(getCategories)

    useEffect(() => {
        if (!categories) return
        if (parentCategoryId === undefined) {
            setCategoryFieldValues(prevValue => ({
                ...prevValue,
                parentCategory: null,
            }))
            return
        }

        const parentCategory = findCategoryById(categories, parseInt(parentCategoryId))
        if (parentCategory && parentCategory.categoryType !== 'WITH_GOODS') {
            setCategoryFieldValues(prevValue => ({
                ...prevValue,
                parentCategory: { id: parseInt(parentCategoryId) },
            }))
        }
    }, [categories, parentCategoryId, setCategoryFieldValues])

    const isCategoryServerError = useSelector(getIsServerError)

    const isCharacteristicGroupServerError = useSelector(getCharacteristicSetsFetchStatus) === 'error'

    const isServerError = isCategoryServerError || isCharacteristicGroupServerError

    const characteristicSetsFetchStatus = useSelector(getCharacteristicSetsFetchStatus)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
        if (characteristicSetsFetchStatus === 'error') {
            dispatch(changeCharacteristicSetsFetchStatus('idle'))
        }
    }

    const isPending = useSelector(getIsPending)

    const isDisabledSaveButton = isPending || categoryFieldValues.name === null

    const isDisabledGoBackButton = isPending

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
                icon={<AddIcon dialogIcon />}
                title={'Добавить категорию товаров'}
                buttons={[
                    <IconButton key={0} dialogButton onClick={handleGoBackToCategories} disabled={isDisabledGoBackButton}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton onClick={handleSaveNewCategory} disabled={isDisabledSaveButton}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                categoryFields={categoryFieldValues}
                changeCategoryFieldValues={handleChangeCategoryValue}
                changeCategoryType={handleChangeCategoryType}
                changeCategoryParent={handleChangeCategoryParent}
                categories={categories}
                categoryTypeTooltip={
                    'Категория с товарами может содержать только товары! Обычная же категория может содержать в себе только другие категории!'
                }
                sets={characteristicSets}
                handleAddRemoveSetInCategory={handleAddRemoveSetInCategory}
                isSetInCategory={isSetInCategory}
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

export default AddCategoryPage
