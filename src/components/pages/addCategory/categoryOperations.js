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
            newCategory.subCategories = deepCopyCategories(newCategory.subCategories)
        } else {
            newCategory.subCategories = []
        }
        return newCategory
    })
}

export const createOpenCategoryArrayToActive = (categories, activeCategoryId) => {
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

export const createSetArrayWithoutSetsInParents = (categories, parentCategoryId, sets = []) => {
    let setArrayWithoutSetsInParents = [...sets]

    const removeSetsWhoInParent = parentCategoryId => {
        const parentCategory = findCategoryById(categories, parentCategoryId)
        if (!parentCategory) return
        const setIds = parentCategory.characteristicSets.map(set => set.id)
        setArrayWithoutSetsInParents = setArrayWithoutSetsInParents.filter(set => !setIds.includes(set.id))
        removeSetsWhoInParent(parentCategory.parentCategory)
    }

    removeSetsWhoInParent(parentCategoryId)

    return setArrayWithoutSetsInParents
}

export const setInParentCategoryNames = (categories, parentCategoryId) => {
    let categoriesWithSets = []

    const createParentCategoriesListWithSets = parentCategoryId => {
        const parentCategory = findCategoryById(categories, parentCategoryId)
        if (!parentCategory) return

        if (parentCategory.characteristicSets.length > 0) {
            categoriesWithSets = [...categoriesWithSets, parentCategory.name]
        }

        createParentCategoriesListWithSets(parentCategory.parentCategory)
    }

    createParentCategoriesListWithSets(parentCategoryId)

    return categoriesWithSets
}

export const setInParentCategoryIds = (categories, parentCategoryId) => {
    let categoriesWithSets = []

    const createParentCategoriesListWithSets = parentCategoryId => {
        const parentCategory = findCategoryById(categories, parentCategoryId)
        if (!parentCategory) return

        if (parentCategory.characteristicSets.length > 0) {
            categoriesWithSets = [...categoriesWithSets, parentCategory.id]
        }

        createParentCategoriesListWithSets(parentCategory.parentCategory)
    }

    createParentCategoriesListWithSets(parentCategoryId)

    return categoriesWithSets
}

export const setInChildrenCategoryNames = currentCategory => {
    let categoriesWithSets = []

    const createChildrenCategoriesListWithSets = (currentCategory, level = 0) => {
        if (level !== 0 && currentCategory.characteristicSets.length > 0) {
            categoriesWithSets = [...categoriesWithSets, currentCategory.name]
        }

        if (currentCategory.subCategories.length > 0) {
            currentCategory.subCategories.forEach(subCategory => {
                createChildrenCategoriesListWithSets(subCategory, level + 1)
            })
        }
    }

    createChildrenCategoriesListWithSets(currentCategory)

    return categoriesWithSets
}

export const setInChildrenCategoryIds = currentCategory => {
    let categoriesWithSets = []

    const createChildrenCategoriesListWithSets = (currentCategory, level = 0) => {
        if (level !== 0 && currentCategory.characteristicSets?.length > 0) {
            categoriesWithSets = [...categoriesWithSets, currentCategory.id]
        }

        if (currentCategory.subCategories?.length > 0) {
            currentCategory.subCategories.forEach(subCategory => {
                createChildrenCategoriesListWithSets(subCategory, level + 1)
            })
        }
    }

    createChildrenCategoriesListWithSets(currentCategory)

    return categoriesWithSets
}
