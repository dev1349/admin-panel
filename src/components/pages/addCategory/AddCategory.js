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
    canFetchGetPostPutDelete,
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
import ServerErrorModal from '../../molecules/modals/serverErrorModal/ServerErrorModal'
import Loader from '../../molecules/loader/Loader'
import { deleteNullValuesFromObject } from '../../../common/preparingDataForSending/preparingDataForSending'
import { getBehaviorMode } from '../../../reducers/behaviorServerInteraction'

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
        history.push(
            parentCategoryId ? `/categories/${parentCategoryId}` : `/categories`
        )
    }

    const canFetch = useSelector(canFetchGetPostPutDelete)

    const behaviorMode = useSelector(getBehaviorMode)

    const handleSaveNewCategory = () => {
        if (!canFetch) return
        dispatch(changePostPutDeleteFetchStatus('pending'))
        postCategoryFetch(deleteNullValuesFromObject(categoryFieldValues))
            .then(response => {
                dispatch(changePostPutDeleteFetchStatus('success'))
                dispatch(changePostPutDeleteFetchStatus('idle'))
                if (behaviorMode === 'FAST_MODE') {
                    dispatch(addNewCategory(response))
                }
                if (behaviorMode === 'SAFE_MODE') {
                    dispatch(getAllCategories())
                }
                history.push(
                    response.id ? `/categories/${response.id}` : `/categories`
                )
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

    const [categoryFieldValues, setCategoryFieldValues] =
        useState(initialFieldValues)

    const handleChangeCategoryValue = payload => {
        setCategoryFieldValues({ ...categoryFieldValues, ...payload })
    }

    const handleChangeCategoryType = payload => {
        setCategoryFieldValues({
            ...categoryFieldValues,
            categoryType: payload.categoryType
                ? 'WITH_GOODS'
                : 'WITH_CATEGORIES',
        })
    }

    const handleChangeCategoryParent = payload => {
        setCategoryFieldValues({
            ...categoryFieldValues,
            parentCategory: payload.parentCategory
                ? { id: payload.parentCategory }
                : null,
        })
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

        const parentCategory = findCategoryById(
            categories,
            parseInt(parentCategoryId)
        )
        if (parentCategory && parentCategory.categoryType !== 'WITH_GOODS') {
            setCategoryFieldValues(prevValue => ({
                ...prevValue,
                parentCategory: { id: parentCategoryId },
            }))
        }
    }, [categories, parentCategoryId, setCategoryFieldValues])

    const isServerError = useSelector(getIsServerError)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
    }

    const isPending = useSelector(getIsPending)

    const isDisabledSaveButton = isPending || categoryFieldValues.name === null

    const isDisabledGoBackButton = isPending

    return (
        <>
            <AddCategory
                icon={<AddIcon dialogIcon />}
                title={'Добавить категорию товаров'}
                buttons={[
                    <IconButton
                        key={0}
                        dialogButton
                        onClick={handleGoBackToCategories}
                        disabled={isDisabledGoBackButton}
                    >
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        onClick={handleSaveNewCategory}
                        disabled={isDisabledSaveButton}
                    >
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
            />
            <ServerErrorModal
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
