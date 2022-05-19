import React, { useState } from 'react'
import Box from '../../../atoms/wrappers/Box/Box'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpandLessIcon'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import Link from '../../../atoms/link/Link'
import { Link as RouterLink } from 'react-router-dom'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import { Collapse } from '@mui/material'
import CategoryList from '../categoryList/CategoryList'
import FolderIcon from '../../../atoms/icons/folderIcon/FolderIcon'

const CategoryTree = ({
    categories,
    draggingCategory,
    setDraggingCategory,
    moveCategory,
    moveCategoryToRoot,
    categoryUrl,
    activeCategoryId,
    editCategory,
    openCategories,
    openCategoriesAfterDragging,
    setDraggedCategory,
}) => {
    const [open, setOpen] = useState(true)
    const handleOpenSubCategory = () => {
        setOpen(true)
    }
    const handleCloseSubCategory = () => {
        setOpen(false)
    }

    const hasCategories =
        categories && Array.isArray(categories) && categories.length !== 0

    const canDrop = () => draggingCategory.parentCategory !== null

    const dragEnterHandler = event => {
        event.preventDefault()
        if (canDrop()) {
            event.dataTransfer.dropEffect = 'move'
        } else {
            event.dataTransfer.dropEffect = 'none'
        }
    }
    const dragOverHandler = event => {
        event.preventDefault()
        event.currentTarget.style.backgroundColor = '#F2EFEF'

        if (canDrop()) {
            event.dataTransfer.dropEffect = 'move'
        } else {
            event.dataTransfer.dropEffect = 'none'
        }
    }
    const dragLeaveHandler = event => {
        event.currentTarget.style.backgroundColor = null
    }
    const dropHandler = event => {
        event.preventDefault()

        if (!canDrop()) {
            return
        }

        moveCategoryToRoot(draggingCategory.id)

        event.currentTarget.style.backgroundColor = null
    }

    return (
        <Box>
            <Box
                paddingRight41
                activeItem={activeCategoryId === undefined}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                onDragEnter={dragEnterHandler}
                onDrop={dropHandler}
            >
                <FlexTemplate spaceBetween alignItemsCenter gap7>
                    {hasCategories &&
                        (open ? (
                            <ExpandLessIcon
                                onClick={handleCloseSubCategory}
                                dialogIcon
                            />
                        ) : (
                            <ExpandMoreIcon
                                onClick={handleOpenSubCategory}
                                dialogIcon
                            />
                        ))}
                    <Box marginLeft31={!hasCategories} flexGrow1>
                        <Link
                            component={RouterLink}
                            to={`/${categoryUrl}`}
                            dialogLink
                        >
                            <FlexTemplate alignItemsCenter gap7>
                                <FolderIcon dialogIcon />
                                <ListItemText
                                    primary={'Категории'}
                                    dialogItem
                                />
                            </FlexTemplate>
                        </Link>
                    </Box>
                </FlexTemplate>
            </Box>
            {hasCategories && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box marginLeft31>
                        <CategoryList
                            categories={categories}
                            draggingCategory={draggingCategory}
                            setDraggingCategory={setDraggingCategory}
                            moveCategory={moveCategory}
                            categoryUrl={categoryUrl}
                            activeCategoryId={activeCategoryId}
                            editCategory={editCategory}
                            openCategories={openCategories}
                            openCategoriesAfterDragging={
                                openCategoriesAfterDragging
                            }
                            setDraggedCategory={setDraggedCategory}
                        />
                    </Box>
                </Collapse>
            )}
        </Box>
    )
}

export default CategoryTree
