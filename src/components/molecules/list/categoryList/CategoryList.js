import React from 'react'
import List from '../../../atoms/list/list/List'
import CategoryItem from '../categoryItem/CategoryItem'

const CategoryList = ({
    categories,
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
    const folderCategories = [
        ...categories.filter(
            category => category.categoryType === 'WITH_CATEGORIES'
        ),
    ]
    const goodCategories = [
        ...categories.filter(
            category => category.categoryType === 'WITH_GOODS'
        ),
    ]
    const sortedCategories = [
        ...folderCategories.sort((el1, el2) => (el1.name > el2.name ? 1 : -1)),
        ...goodCategories.sort((el1, el2) => (el1.name > el2.name ? 1 : -1)),
    ]

    return (
        <List aria-labelledby="nested-category-list">
            {sortedCategories.map(category => (
                <CategoryItem
                    key={category.id}
                    category={category}
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
            ))}
        </List>
    )
}

export default CategoryList
