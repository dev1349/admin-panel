import React, { useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'
import CategoryGoods from '../../molecules/list/categoryGoods/CategoryGoods'
import CategoryTree from '../../molecules/list/categoryTree/CategoryTree'

const Categories = ({
    icon,
    categories,
    title,
    buttons,
    moveCategory,
    moveCategoryToRoot,
    categoryUrl,
    activeCategoryId,
    editCategory,
    openCategories,
    openCategoriesAfterDragging,
    setDraggedCategory,
}) => {
    const [draggingCategory, setDraggingCategory] = useState(null)

    return (
        <MaxWidthTemplate>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <FlexTemplate gap7>
                    <CategoryTree
                        categories={categories}
                        draggingCategory={draggingCategory}
                        setDraggingCategory={setDraggingCategory}
                        moveCategory={moveCategory}
                        moveCategoryToRoot={moveCategoryToRoot}
                        categoryUrl={categoryUrl}
                        activeCategoryId={activeCategoryId}
                        editCategory={editCategory}
                        openCategories={openCategories}
                        openCategoriesAfterDragging={openCategoriesAfterDragging}
                        setDraggedCategory={setDraggedCategory}
                    />
                    <CategoryGoods />
                </FlexTemplate>
            </AdminPageBorder>
        </MaxWidthTemplate>
    )
}

export default Categories
