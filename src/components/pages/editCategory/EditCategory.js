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
import ServerErrorModal from '../../molecules/modals/serverErrorModal/ServerErrorModal'
import Loader from '../../molecules/loader/Loader'
import {
    changeToObjectWithId,
    createValueForUpdating,
} from '../../../common/preparingDataForSending/preparingDataForSending'
import { getBehaviorMode } from '../../../reducers/behaviorServerInteraction'

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
            initialCategoryFieldValues,
            categoryFieldValues,
            ['parentCategory']
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

    const [categoryFieldValues, setCategoryFieldValues] =
        useState(initialFieldValues)

    const [initialCategoryFieldValues, setInitialCategoryFieldValues] =
        useState(null)

    const categories = useSelector(getCategories)

    useEffect(async () => {
        if (!categories?.length) return
        const intCategoryId = parseInt(categoryId)
        if (!intCategoryId) return
        try {
            const category = await getCategoryFetch(intCategoryId)
            setCategoryFieldValues(
                changeToObjectWithId(category, ['parentCategory'], ['command'])
            )
            setInitialCategoryFieldValues(
                changeToObjectWithId(category, ['parentCategory'], ['command'])
            )
        } catch (e) {
            console.log(e)
            dispatch(changePostPutDeleteFetchStatus('error'))
        }
    }, [
        categories,
        categoryId,
        getCategoryFetch,
        setCategoryFieldValues,
        setInitialCategoryFieldValues,
        changeToObjectWithId,
    ])

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
        !(categoryFieldValues?.name
            ? categoryFieldValues?.name.trim()
            : categoryFieldValues?.name) ||
        initialCategoryFieldValues === null ||
        !createValueForUpdating(
            initialCategoryFieldValues,
            categoryFieldValues,
            ['parentCategory']
        )

    const isServerError = useSelector(getIsServerError)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
        dispatch(changeFetchStatus('idle'))
        history.push(`/categories`)
    }

    const isSwitchCategoryTypeDisabled =
        Array.isArray(categoryFieldValues?.subCategories) &&
        categoryFieldValues.subCategories?.length !== 0

    return (
        <>
            <AddCategory
                icon={<EditIcon dialogIcon />}
                title={'Редактировать категорию товаров'}
                buttons={[
                    <IconButton
                        key={0}
                        dialogButton
                        onClick={handleGoBackToCategories}
                        disabled={isReturnButtonDisabled}
                    >
                        <UndoIcon />
                    </IconButton>,
                    <IconButton
                        key={1}
                        dialogButton
                        onClick={handleSaveChangedCategory}
                        disabled={isSaveButtonDisabled}
                    >
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

export default EditCategoryPage
