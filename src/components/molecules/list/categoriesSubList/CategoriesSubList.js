import React from 'react'
import List from '../../../atoms/list/list/List'
import CategoriesSubListItem from '../categoriesSubListItem/CategoriesSubListItem'

const CategoriesSubList = ({
    component,
    category,
    subcategories,
    draggingCategory,
    draggingFromCategory,
    setDraggingFromCategory,
    draggingSubCategory,
    setDraggingSubCategory,
    changeSubCategories,
}) => {
    return (
        <List component={component} disablePadding>
            {subcategories.map(subcategory => (
                <CategoriesSubListItem
                    key={subcategory.id}
                    subcategory={subcategory}
                    draggingCategory={draggingCategory}
                    category={category}
                    draggingFromCategory={draggingFromCategory}
                    setDraggingFromCategory={setDraggingFromCategory}
                    draggingSubCategory={draggingSubCategory}
                    setDraggingSubCategory={setDraggingSubCategory}
                    changeSubCategories={changeSubCategories}
                />
            ))}
        </List>
    )
}

export default CategoriesSubList
