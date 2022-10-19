export const createCategoriesWithSubcategoriesItems = categories => {
    let categoryItems = []

    const createItems = category => {
        if (category.categoryType === 'WITH_CATEGORIES') {
            categoryItems.push({
                id: category.id,
                label: category.name,
                value: category.id,
            })
        }
        if (Array.isArray(category.subCategories) && category.subCategories.length !== 0 && category.subCategories[0] !== null) {
            category.subCategories.forEach(subCategory => createItems(subCategory))
        }
    }

    if (categories) {
        categories.forEach(category => createItems(category))
    }

    return categoryItems
}

export const createCategoriesWithGoodsItems = categories => {
    let categoryItems = []

    const createItems = category => {
        if (category.categoryType === 'WITH_GOODS') {
            categoryItems.push({
                id: category.id,
                label: category.name,
                value: category.id,
            })
        }
        if (Array.isArray(category.subCategories) && category.subCategories.length !== 0 && category.subCategories[0] !== null) {
            category.subCategories.forEach(subCategory => createItems(subCategory))
        }
    }

    if (categories) {
        categories.forEach(category => createItems(category))
    }

    return categoryItems
}
