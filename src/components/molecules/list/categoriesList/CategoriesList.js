import React from 'react'
import List from '../../../atoms/list/list/List'
import CategoriesListItem from '../categoriesListItem/CategoriesListItem'

const CategoriesList = ({
    component,
    items,
    open,
    openCloseSubCategories,
    draggingCategory,
    setDraggingCategory,
    draggingSubCategory,
    setDraggingSubCategory,
    draggingFromCategory,
    setDraggingFromCategory,
    changeCategories,
    changeSubCategories,
}) => {
    return (
        <List aria-labelledby="nested-list-subheader" component={component}>
            {items.map(category => (
                <CategoriesListItem
                    key={category.id}
                    open={!!open[category.id]}
                    openCloseSubCategories={openCloseSubCategories(category.id)}
                    category={category}
                    draggingCategory={draggingCategory}
                    setDraggingCategory={setDraggingCategory}
                    draggingSubCategory={draggingSubCategory}
                    setDraggingSubCategory={setDraggingSubCategory}
                    draggingFromCategory={draggingFromCategory}
                    setDraggingFromCategory={setDraggingFromCategory}
                    changeCategories={changeCategories}
                    changeSubCategories={changeSubCategories}
                />
            ))}
        </List>
    )
}

export default CategoriesList
