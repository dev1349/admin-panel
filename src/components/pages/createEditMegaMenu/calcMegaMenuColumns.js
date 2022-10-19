export const getMegaMenuColumns = (activeFirstLevelItem, subItemHeight, subItemPaddingBottom, subSubItemHeight, columnHeight) => {
    const subItemsHeight = activeFirstLevelItem?.subItemList?.length * subItemHeight

    const subItemsAllPaddingBottom = activeFirstLevelItem?.subItemList?.reduce(
        (acc, cur) => (cur.subItemList.length > 0 ? acc + subItemPaddingBottom : acc),
        0
    )
    const subSubItemsHeight = activeFirstLevelItem?.subItemList?.reduce((acc, cur) => acc + cur.subItemList.length, 0) * subSubItemHeight
    const allHeight = subItemsHeight + subItemsAllPaddingBottom + subSubItemsHeight
    return Math.ceil(allHeight / columnHeight)
}

export const decrementMegaMenuColumns = (
    catalogButtonMarginRight,
    categoriesContainerWidth,
    subCategoriesContainerPaddingLeft,
    columns,
    columnWidth,
    clientWidth
) => {
    if (
        !isNaN(catalogButtonMarginRight) &&
        categoriesContainerWidth &&
        columns &&
        columns > 1 &&
        columnWidth &&
        subCategoriesContainerPaddingLeft &&
        clientWidth &&
        clientWidth < catalogButtonMarginRight + columns * columnWidth + categoriesContainerWidth + 2 * subCategoriesContainerPaddingLeft
    ) {
        return decrementMegaMenuColumns(
            catalogButtonMarginRight,
            categoriesContainerWidth,
            subCategoriesContainerPaddingLeft,
            columns - 1,
            columnWidth,
            clientWidth
        )
    }
    return columns
}
