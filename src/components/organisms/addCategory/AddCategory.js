import React from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/AdminPageBorder/AdminPageBorder'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledSwitch from '../../molecules/inputs/labeledSwitch/LabeledSwitch'
import LabeledSelectField from '../../molecules/inputs/labeledSelectField/LabeledSelectField'

const createCategoryItems = categories => {
    let categoryItems = []

    const createItems = category => {
        if (category.categoryType !== 'WITH_GOODS') {
            categoryItems.push({
                id: category.id,
                label: category.name,
                value: category.id,
            })
        }
        if (
            Array.isArray(category.subCategories) &&
            category.subCategories.length !== 0 &&
            category.subCategories[0] !== null
        ) {
            category.subCategories.forEach(subCategory =>
                createItems(subCategory)
            )
        }
    }

    if (categories) {
        categories.forEach(category => createItems(category))
    }

    return categoryItems
}

const AddCategory = ({
    icon,
    title,
    buttons,
    categoryFields,
    changeCategoryFieldValues,
    changeCategoryType,
    changeCategoryParent,
    categories,
    mode = 'addCategory',
    disabledSwitchCategoryType = false,
    categoryTypeTooltip,
}) => {
    const parentCategories = createCategoryItems(categories).sort((el1, el2) =>
        el1.label > el2.label ? 1 : -1
    )

    return (
        <MaxWidthTemplate>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <LabeledTextField
                    id={'categoryName'}
                    label={'Название категории'}
                    placeholder={'Введите название категории товара'}
                    name={'name'}
                    value={categoryFields['name']}
                    onChange={changeCategoryFieldValues}
                    autoFocus
                />
                <LabeledSwitch
                    id={'isGoodCategory'}
                    label={'Категория с товарами'}
                    name={'categoryType'}
                    checked={categoryFields['categoryType'] === 'WITH_GOODS'}
                    onChange={changeCategoryType}
                    disabled={
                        mode === 'editCategory' && disabledSwitchCategoryType
                    }
                    tooltip={categoryTypeTooltip}
                />
                <LabeledSelectField
                    id={'parentCategory'}
                    label={'Родительская категория'}
                    name={'parentCategory'}
                    value={
                        categoryFields['parentCategory']
                            ? categoryFields['parentCategory'].id
                            : categoryFields['parentCategory']
                    }
                    onChange={changeCategoryParent}
                    items={parentCategories}
                    defaultLabel={'Корневая категория'}
                    isStartItemDisabled={false}
                />
            </AdminPageBorder>
        </MaxWidthTemplate>
    )
}

export default AddCategory
