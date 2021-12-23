import React, { useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import CategoryHeader from '../../molecules/headers/categoryHeader/CategoryHeader'
import CategoriesList from '../../molecules/list/categoriesList/CategoriesList'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'
import PaddingTopTemplate from '../../templates/paddingTopTemplate/paddingTopTemplate'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'

const Categories = ({
    categories,
    title,
    buttons,
    changeCategories,
    changeSubCategories,
}) => {
    const [open, setOpen] = useState({})
    const [draggingCategory, setDraggingCategory] = useState(null)
    const [draggingFromCategory, setDraggingFromCategory] = useState(null)
    const [draggingSubCategory, setDraggingSubCategory] = useState(null)

    const handleOpenClose = id => () => {
        if (open[id]) {
            const newOpen = { ...open }
            delete newOpen[id]
            setOpen(newOpen)
        } else {
            setOpen({ ...open, [id]: true })
        }
    }

    return (
        <MaxWidthTemplate>
            <PaddingTemplate>
                <CategoryHeader title={title} buttons={buttons} />
                <PaddingTopTemplate>
                    <FlexTemplate>
                        <CategoriesList
                            component={'nav'}
                            items={categories}
                            open={open}
                            openCloseSubCategories={handleOpenClose}
                            draggingCategory={draggingCategory}
                            setDraggingCategory={setDraggingCategory}
                            draggingSubCategory={draggingSubCategory}
                            setDraggingSubCategory={setDraggingSubCategory}
                            draggingFromCategory={draggingFromCategory}
                            setDraggingFromCategory={setDraggingFromCategory}
                            changeCategories={changeCategories}
                            changeSubCategories={changeSubCategories}
                        />
                    </FlexTemplate>
                </PaddingTopTemplate>
            </PaddingTemplate>
        </MaxWidthTemplate>
    )
}

export default Categories
