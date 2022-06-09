import React, { useEffect, useState } from 'react'
import ListItem from '../../../atoms/list/listItem/ListItem'
import { Link as RouterLink } from 'react-router-dom'
import ListItemText from '../../../atoms/list/listItemText/ListItemText'
import Link from '../../../atoms/link/Link'
import { Collapse, Fade } from '@mui/material'
import ExpandMoreIcon from '../../../atoms/icons/expandMoreIcon/ExpandMoreIcon'
import ExpandLessIcon from '../../../atoms/icons/expandLessIcon/ExpandLessIcon'
import FlexTemplate from '../../../templates/flexTemplate/FlexTemplate'
import IconButton from '../../buttons/iconButton/IconButton'
import EditIcon from '../../../atoms/icons/editIcon/EditIcon'
import CategoryList from '../categoryList/CategoryList'
import Box from '../../../atoms/wrappers/box/Box'
import { createChildrenCategoryIds } from '../../../pages/addCategory/categoryOperations'
import FolderIcon from '../../../atoms/icons/folderIcon/FolderIcon'
import CategoryIcon from '../../../atoms/icons/categoryIcon/CategoryIcon'

const CategoryItem = ({
    category,
    draggingCategory,
    setDraggingCategory,
    moveCategory,
    categoryUrl,
    activeCategoryId,
    editCategory,
    openCategories,
    openCategoriesAfterDragging,
    setDraggedCategory,
}) => {
    const [open, setOpen] = useState(false)
    const handleOpenSubCategory = () => {
        setOpen(true)
    }
    const handleCloseSubCategory = () => {
        setOpen(false)
    }
    useEffect(() => {
        if (!Array.isArray(openCategories)) return
        if (!Array.isArray(openCategoriesAfterDragging)) return
        if (openCategories.includes(category.id) || openCategoriesAfterDragging.includes(category.id)) {
            setOpen(true)
        }
    }, [openCategories, setOpen])

    const [showEditButton, setShowEditButton] = useState(false)
    const handleMouseEnter = () => setShowEditButton(true)
    const handleMouseLeave = () => setShowEditButton(false)

    const hasSubCategories = () =>
        category.subCategories &&
        Array.isArray(category.subCategories) &&
        category.subCategories.length !== 0 &&
        category.subCategories[0] !== null

    const dragStartHandler = () => {
        setDraggingCategory(category)
    }
    const dragEndHandler = () => {
        setDraggingCategory(null)
    }
    const canDrop = () =>
        !(
            createChildrenCategoryIds(draggingCategory).includes(category.id) ||
            draggingCategory.id === category.id ||
            draggingCategory.parentCategory === category.id ||
            category.categoryType === 'WITH_GOODS'
        )

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

        const handleOpenCategory = () => setOpen(true)
        moveCategory(draggingCategory.id, category.id, handleOpenCategory)
        setDraggedCategory(draggingCategory)
        event.currentTarget.style.backgroundColor = null
    }

    return (
        <ListItem dialogItem>
            <Box flexGrow1>
                <Box
                    activeItem={parseInt(activeCategoryId) === category.id}
                    onDragLeave={dragLeaveHandler}
                    onDragOver={dragOverHandler}
                    onDragEnter={dragEnterHandler}
                    onDrop={dropHandler}
                >
                    <FlexTemplate spaceBetween alignItemsCenter gap7 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {hasSubCategories() &&
                            (open ? (
                                <ExpandLessIcon onClick={handleCloseSubCategory} dialogIcon />
                            ) : (
                                <ExpandMoreIcon onClick={handleOpenSubCategory} dialogIcon />
                            ))}
                        <Box
                            marginLeft31={!hasSubCategories()}
                            flexGrow1
                            draggable
                            onDragStart={dragStartHandler}
                            onDragEnd={dragEndHandler}
                        >
                            <Link component={RouterLink} to={`/${categoryUrl}/${category.id}`} dialogLink>
                                <FlexTemplate alignItemsCenter gap7>
                                    {category.categoryType === 'WITH_GOODS' ? <CategoryIcon dialogIcon /> : <FolderIcon dialogIcon />}
                                    <ListItemText primary={category.name} dialogItem />
                                </FlexTemplate>
                            </Link>
                        </Box>
                        <Fade in={showEditButton}>
                            <div>
                                <IconButton dialogButton onClick={editCategory(category.id)}>
                                    <EditIcon />
                                </IconButton>
                            </div>
                        </Fade>
                    </FlexTemplate>
                </Box>
                {hasSubCategories() && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box marginLeft31>
                            <CategoryList
                                categories={category.subCategories}
                                draggingCategory={draggingCategory}
                                setDraggingCategory={setDraggingCategory}
                                moveCategory={moveCategory}
                                categoryUrl={categoryUrl}
                                activeCategoryId={activeCategoryId}
                                editCategory={editCategory}
                                openCategories={openCategories}
                                openCategoriesAfterDragging={openCategoriesAfterDragging}
                                setDraggedCategory={setDraggedCategory}
                            />
                        </Box>
                    </Collapse>
                )}
            </Box>
        </ListItem>
    )
}

export default CategoryItem
