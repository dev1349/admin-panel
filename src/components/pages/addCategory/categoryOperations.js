export const createChildrenCategoryIds = category => {
    const childrenCategoryIds = []

    const getSubCategoryIds = category => {
        if (category.subCategories) {
            category.subCategories.forEach(subCategory => {
                childrenCategoryIds.push(subCategory.id)
                if (subCategory.subCategories) {
                    getSubCategoryIds(subCategory)
                }
            })
        }
    }
    getSubCategoryIds(category)

    return childrenCategoryIds
}

export const findCategoryById = (categories, categoryId) => {
    let foundCategory
    const findCategory = categories => {
        categories.forEach(category => {
            if (category.id === categoryId) {
                foundCategory = category
                return
            }
            if (category.subCategories) {
                findCategory(category.subCategories)
            }
        })
        return foundCategory
    }

    return findCategory(categories)
}

export const deepCopyCategories = categories => {
    return categories.map(category => {
        const newCategory = { ...category }
        if (newCategory.subCategories && newCategory.subCategories.length) {
            newCategory.subCategories = deepCopyCategories(
                newCategory.subCategories
            )
        } else {
            newCategory.subCategories = []
        }
        return newCategory
    })
}

export const createOpenCategoryArrayToActive = (
    categories,
    activeCategoryId
) => {
    const openCategoryArray = []

    const addCategoryToArray = categoryId => {
        const category = findCategoryById(categories, categoryId)
        if (!category) return
        if (categoryId === activeCategoryId) {
            addCategoryToArray(category.parentCategory)
            return
        }
        openCategoryArray.push(category.id)
        addCategoryToArray(category.parentCategory)
    }

    addCategoryToArray(activeCategoryId)

    return openCategoryArray
}
