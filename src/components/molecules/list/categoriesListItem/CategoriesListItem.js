import React from 'react'
import {
    Link as RouterLink,
    useHistory,
    useLocation,
    useParams,
} from 'react-router-dom'
import ListItemButton from '../../../atoms/list/listItemButton/ListItemButton'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import Link from '../../../atoms/link/Link'
import { Collapse } from '@mui/material'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpendLessIcon'
import CategoriesSubList from '../categoriesSubList/CategoriesSubList'

const CategoriesListItem = ({
    category,
    open,
    openCloseSubCategories,
    draggingCategory,
    setDraggingCategory,
    draggingFromCategory,
    setDraggingFromCategory,
    draggingSubCategory,
    setDraggingSubCategory,
    changeCategories,
    changeSubCategories,
}) => {
    const { subcategoryId } = useParams()
    let history = useHistory()
    const location = useLocation()
    const hasSubCategories =
        category.subcategories && category.subcategories.length !== 0
    const dragStartHandler = () => {
        setDraggingCategory(category)
    }
    const dragOverHandler = e => {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = 'lightGrey'
    }
    const dropHandler = e => {
        e.preventDefault()
        if (draggingCategory) {
            changeCategories(draggingCategory, category)
        }
        if (!draggingCategory) {
            changeSubCategories(
                draggingFromCategory,
                draggingSubCategory,
                category,
                'toCategory'
            )
        }
        if (
            !draggingCategory &&
            draggingSubCategory.id === parseInt(subcategoryId)
        ) {
            const basePathName = location.pathname.split('/')[1]
            history.push(`/${basePathName}/${category.id}/${subcategoryId}`)
        }
        e.currentTarget.style.backgroundColor = null
    }
    const dragLeaveHandler = e => {
        e.currentTarget.style.backgroundColor = null
    }
    const dragEndHandler = () => {
        setDraggingCategory(null)
    }
    const { categoryId } = useParams()

    return (
        <>
            <ListItemButton
                draggable
                onDragStart={dragStartHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                onDrop={dropHandler}
                onDragEnd={dragEndHandler}
            >
                {hasSubCategories &&
                    (open ? (
                        <ExpandLessIcon
                            onClick={
                                category.subcategories
                                    ? openCloseSubCategories
                                    : null
                            }
                        />
                    ) : (
                        <ExpandMoreIcon
                            onClick={
                                category.subcategories
                                    ? openCloseSubCategories
                                    : null
                            }
                        />
                    ))}
                <Link
                    component={RouterLink}
                    to={`/categoriesList/${category.id}`}
                    color="inherit"
                    underline="none"
                >
                    <ListItemText
                        primary={category.name}
                        withoutExpandIcon={!hasSubCategories && true}
                        activeItem={parseInt(categoryId) === category.id}
                    />
                </Link>
            </ListItemButton>
            {hasSubCategories && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CategoriesSubList
                        component={'div'}
                        category={category}
                        subcategories={category.subcategories}
                        draggingFromCategory={draggingFromCategory}
                        setDraggingFromCategory={setDraggingFromCategory}
                        draggingSubCategory={draggingSubCategory}
                        setDraggingSubCategory={setDraggingSubCategory}
                        draggingCategory={draggingCategory}
                        changeSubCategories={changeSubCategories}
                    />
                </Collapse>
            )}
        </>
    )
}

export default CategoriesListItem
