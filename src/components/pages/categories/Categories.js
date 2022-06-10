import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Categories from '../../organisms/categories/Categories'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import CategoryIcon from '../../atoms/icons/categoryIcon/CategoryIcon'
import {
    closeServerErrorModal,
    deleteCategories,
    getAllCategories,
    getCategories,
    getFetchStatus,
    getIsPending,
    getIsServerError,
    moveCategory,
    moveCategoryToRoot,
} from '../../../reducers/categoriesSlice'
import { useHistory, useParams } from 'react-router-dom'
import { createOpenCategoryArrayToActive, findCategoryById } from '../addCategory/categoryOperations'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'

const CategoriesPage = () => {
    const categories = useSelector(getCategories)

    const fetchStatus = useSelector(getFetchStatus)

    const dispatch = useDispatch()

    const handleMoveCategory = (draggingCategoryId, parentCategoryId, openCategory) => {
        dispatch(moveCategory(draggingCategoryId, parentCategoryId, openCategory))
    }

    const handleMoveCategoryToRoot = draggingCategoryId => {
        dispatch(moveCategoryToRoot(draggingCategoryId))
    }

    let history = useHistory()

    const { categoryId } = useParams()

    const handleAddCategory = () => {
        history.push('/addCategory' + (categoryId !== undefined ? `/${categoryId}` : ''))
    }

    const handleEditCategory = categoryId => () => {
        history.push('/editCategory' + (categoryId !== undefined ? `/${categoryId}` : ''))
    }

    useEffect(() => {
        if (fetchStatus !== 'idle') return
        dispatch(getAllCategories())
    }, [fetchStatus, dispatch, getAllCategories])

    const [openCategories, setOpenCategories] = useState([])

    useEffect(() => {
        if (!categories) return
        if (!categoryId) return

        setOpenCategories(createOpenCategoryArrayToActive(categories, parseInt(categoryId)))
    }, [categoryId, categories, setOpenCategories])

    const [draggedCategory, setDraggedCategory] = useState(null)

    const handleSetDraggedCategory = category => setDraggedCategory(category)

    const [openCategoriesAfterDragging, setOpenCategoriesAfterDragging] = useState([])

    useEffect(() => {
        if (!categories) return
        if (!draggedCategory) return

        setOpenCategoriesAfterDragging(createOpenCategoryArrayToActive(categories, parseInt(draggedCategory.id)))
    }, [categories, draggedCategory])

    const canCategoryDelete = categoryId => {
        const activeCategory = findCategoryById(categories, parseInt(categoryId))

        return categoryId && activeCategory && (activeCategory.subCategories ? activeCategory.subCategories.length === 0 : true)
    }

    const handleHistoryToCategories = () => history.push('/categories')

    const handleDeleteCategory = categoryId => () => {
        dispatch(deleteCategories(categoryId, handleHistoryToCategories))
    }

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleConfirmDeleting = categoryId => () => {
        handleDeleteCategory(categoryId)()
        handleCloseModal()
    }

    const isServerError = useSelector(getIsServerError)

    const handleCloseServerErrorModal = () => {
        dispatch(closeServerErrorModal())
    }

    const isPending = useSelector(getIsPending)

    const isAddCategoryButtonDisabled = isPending

    const isDeleteCategoryButtonDisabled = isPending || !canCategoryDelete(categoryId)

    return (
        <>
            <Categories
                icon={<CategoryIcon dialogIcon />}
                categories={categories}
                title={'Категории товаров'}
                buttons={[
                    <IconButton key={0} dialogButton onClick={handleAddCategory} disabled={isAddCategoryButtonDisabled}>
                        <AddIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton onClick={handleOpenModal} disabled={isDeleteCategoryButtonDisabled}>
                        <DeleteIcon />
                    </IconButton>,
                ]}
                moveCategory={handleMoveCategory}
                moveCategoryToRoot={handleMoveCategoryToRoot}
                categoryUrl={'categories'}
                activeCategoryId={categoryId}
                editCategory={handleEditCategory}
                openCategories={openCategories}
                openCategoriesAfterDragging={openCategoriesAfterDragging}
                setDraggedCategory={handleSetDraggedCategory}
            />
            <DeleteModal
                open={openModal}
                onClose={handleCloseModal}
                onYes={handleConfirmDeleting(categoryId)}
                title={'Подтверждение удаления'}
                description={'Вы действительно хотите удалить эту категорию?'}
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

export default CategoriesPage
