import React from 'react'
import H1 from '../../../atoms/textElements/headers/H1/H1'
import PaddingBetweenButtonsTemplate from '../../../templates/paddingBetweenButtonsTemplate/PaddingBetweenButtonsTemplate'
import SimpleButton from '../../../atoms/simpleButton/SimpleButton'
import AddIcon from '../../../atoms/icons/addIcon/AddIcon'
import DeleteIcon from '../../../atoms/icons/deleteIcon/DeleteIcon'

const CategoryHeader = ({ title, buttons }) => {
    const handleDeleteCategory = categoryId => () => {
        buttons.deleteCategory.onClick(categoryId)
    }
    return (
        <>
            <H1>{title}</H1>
            <PaddingBetweenButtonsTemplate>
                <SimpleButton
                    variant={'contained'}
                    startIcon={<AddIcon />}
                    onClick={buttons.addCategory.onClick}
                >
                    {buttons.addCategory.title}
                </SimpleButton>
                <SimpleButton
                    variant={'contained'}
                    startIcon={<AddIcon />}
                    onClick={buttons.addSubCategory.onClick}
                >
                    {buttons.addSubCategory.title}
                </SimpleButton>
                <SimpleButton
                    variant={'contained'}
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteCategory(
                        buttons.deleteCategory.categoryId
                    )}
                    disabled={buttons.deleteCategory.disabled}
                >
                    {buttons.deleteCategory.title}
                </SimpleButton>
            </PaddingBetweenButtonsTemplate>
        </>
    )
}

export default CategoryHeader
