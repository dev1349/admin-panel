import React from 'react'
import Link from '../../../atoms/link/Link'
import { Link as RouterLink, useHistory, useParams } from 'react-router-dom'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import ListItemButton from '../../../atoms/list/listItemButton/ListItemButton'

const CategoriesSubListItem = ({
    subcategory,
    draggingCategory,
    category,
    draggingFromCategory,
    setDraggingFromCategory,
    draggingSubCategory,
    setDraggingSubCategory,
    changeSubCategories,
}) => {
    const { subcategoryId } = useParams()
    let history = useHistory()

    const dragStartSubHandler = () => {
        setDraggingFromCategory(category)
        setDraggingSubCategory(subcategory)
    }

    const dragOverSubHandler = e => {
        e.preventDefault()
        e.currentTarget.style.backgroundColor = 'lightGrey'
    }

    const dropSubHandler = e => {
        e.preventDefault()
        changeSubCategories(
            draggingFromCategory,
            draggingSubCategory,
            category,
            subcategory
        )
        e.currentTarget.style.backgroundColor = null
        if (parseInt(subcategoryId) === draggingSubCategory.id) {
            const basePathName = location.pathname.split('/')[1]
            history.push(`/${basePathName}/${category.id}/${subcategoryId}`)
        }
    }

    const dragLeaveSubHandler = e => {
        e.currentTarget.style.backgroundColor = null
    }
    const dragEndSubHandler = () => {
        setDraggingFromCategory(null)
        setDraggingSubCategory(null)
    }

    return (
        <ListItemButton
            sub
            key={subcategory.id}
            onDragStart={!draggingCategory ? dragStartSubHandler : null}
            onDragLeave={!draggingCategory ? dragLeaveSubHandler : null}
            onDragOver={!draggingCategory ? dragOverSubHandler : null}
            onDrop={!draggingCategory ? dropSubHandler : null}
            onDragEnd={!draggingCategory ? dragEndSubHandler : null}
            draggable
        >
            <Link
                component={RouterLink}
                to={`/categoriesList/${category.id}/${subcategory.id}`}
                color="inherit"
                underline="none"
            >
                <ListItemText
                    primary={subcategory.name}
                    activeItem={parseInt(subcategoryId) === subcategory.id}
                />
            </Link>
        </ListItemButton>
    )
}

export default CategoriesSubListItem
