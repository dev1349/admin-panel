import React, { useEffect, useMemo, useState } from 'react'
import { createCategoriesWithGoodsItems } from '../../../../common/categories/getCategoriesForSelect'
import { useGetCategoriesQuery } from '../../../../api/categoriesApiNew'
import { useGetCategoryFacetsQuery } from '../../../../api/facetsApi'
import { createCharacteristicItems, createCharacteristicValueItems } from '../../../../common/getFacetsForSelect/getFacetsForSelect'
import { useAddMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { deleteNullValuesFromObject } from '../../../../common/preparingDataForSending/preparingDataForSending'
import AdminPageHeader from '../../../molecules/headers/adminPageHeader/AdminPageHeader'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import Container from '../../../templates/container/Container'
import Box from '../../../atoms/wrappers/box/Box'
import VerticalLabeledOutlinedInput from '../../../molecules/inputs/verticalLabeledOutlinedInput/VerticalLabeledOutlinedInput'
import VerticalLabeledOutlinedInputNumber from '../../../molecules/inputs/verticalLabeledOutlinedInputNumber/VerticalLabeledOutlinedInputNumber'
import VerticalLabeledSelect from '../../../molecules/inputs/verticalLabeledSelect/VerticalLabeledSelect'
import Loader from '../../../molecules/loader/Loader'
import FilterIcon from '../../../atoms/icons/filterIcon/FilterIcon'

const MegaMenuModalAddNewFilterContent = ({
    open,
    onClose,
    itemsCount = 0,
    parentItem,
    baseUrl,
    facetQueryParameter,
    onOpenErrorModal,
}) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(itemsCount + 1)
    const [itemCategory, setItemCategory] = useState(null)
    const [itemCharacteristic, setItemCharacteristic] = useState(null)
    const [itemFilter, setItemFilter] = useState(null)

    const handleSetItemCategory = itemCategory => {
        setItemCharacteristic(null)
        setItemFilter(null)
        setItemCategory(itemCategory)
    }

    const handleSetItemCharacteristic = itemCharacteristic => {
        setItemFilter(null)
        setItemCharacteristic(itemCharacteristic)
    }

    const categoriesWithGoodCategoriesItems = data =>
        useMemo(
            () => createCategoriesWithGoodsItems(data).sort((el1, el2) => (el1.label > el2.label ? 1 : -1)),
            [data, createCategoriesWithGoodsItems]
        )

    const {
        categoryItems,
        isLoading: isCategoriesLoading,
        isFetching: isCategoriesFetching,
        isError: isCategoriesError,
    } = useGetCategoriesQuery('', {
        skip: !open,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            categoryItems: categoriesWithGoodCategoriesItems(data),
            isLoading,
            isFetching,
            isError,
        }),
    })

    const {
        categoryFacets,
        isLoading: isFacetsLoading,
        isFetching: isFacetsFetching,
        isError: isFacetsError,
    } = useGetCategoryFacetsQuery(itemCategory, {
        skip: itemCategory === null,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            categoryFacets: data,
            isLoading,
            isFetching,
            isError,
        }),
    })

    const characteristicItems = createCharacteristicItems(categoryFacets)

    const characteristicValuesItems = createCharacteristicValueItems(categoryFacets, itemCharacteristic)

    const isCategoriesSelectDisabled = isCategoriesLoading || isCategoriesFetching || isCategoriesError

    const isCharacteristicsSelectDisabled =
        isFacetsLoading || isFacetsFetching || isFacetsError || itemCategory === null || isCategoriesSelectDisabled

    const isCharacteristicValuesSelectDisabled = itemCharacteristic === null || isCharacteristicsSelectDisabled

    useEffect(() => {
        setItemSortOrder(itemsCount + 1)
    }, [itemsCount, setItemSortOrder])

    const isSaveButtonDisabled =
        itemName === null ||
        itemName.trim() === '' ||
        itemSortOrder === null ||
        itemCategory === null ||
        itemCharacteristic === null ||
        itemFilter === null

    const [addMegaMenuItem, { isError: isNewMegaMenuItemAddError, isLoading: isNewMegaMenuAdding }] = useAddMegaMenuItemMutation()

    const isLoading = isCategoriesLoading || isCategoriesFetching || isFacetsLoading || isFacetsFetching || isNewMegaMenuAdding

    const isError = isCategoriesError || isFacetsError || isNewMegaMenuItemAddError

    useEffect(() => {
        if (isError === false) return
        onOpenErrorModal(true)
    }, [isError])

    const handleSaveNewItem = () => {
        addMegaMenuItem(
            deleteNullValuesFromObject({
                name: itemName.trim(),
                ordering: itemSortOrder,
                url: `${baseUrl}/${itemCategory}?${facetQueryParameter}=${itemFilter}`,
                parentItem: parentItem ? { id: parentItem.id } : parentItem,
            })
        )
            .unwrap()
            .then(() => onClose())
            .catch(error => console.log(error))
    }

    return (
        <>
            <AdminPageHeader
                title={'Пункт з фільтром'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={onClose}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewItem} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                icon={<FilterIcon dialogIcon />}
            />
            <Box maxHeight500 addMegaMenuItemContent>
                <Container modalContentPadding>
                    <VerticalLabeledOutlinedInput
                        id={'item-name'}
                        value={itemName}
                        onChange={setItemName}
                        labelText={'Назва пункту'}
                        autoFocus
                    />
                    <VerticalLabeledOutlinedInputNumber
                        id={'item-sort-order'}
                        value={itemSortOrder}
                        onChange={setItemSortOrder}
                        labelText={'Порядок сортування'}
                    />
                    <VerticalLabeledSelect
                        id={'item-category'}
                        idLabel={'item-category-select-label'}
                        labelText={'Категорія з товарами'}
                        value={itemCategory}
                        onChange={handleSetItemCategory}
                        selectItems={categoryItems}
                        defaultLabel={'Оберіть категорію з товарами'}
                        disabled={isCategoriesSelectDisabled}
                    />
                    <VerticalLabeledSelect
                        id={'item-characteristic'}
                        idLabel={'item-characteristic-select-label'}
                        labelText={'Характеристика товару'}
                        value={itemCharacteristic}
                        onChange={handleSetItemCharacteristic}
                        selectItems={characteristicItems}
                        defaultLabel={'Оберіть характеристику товару'}
                        disabled={isCharacteristicsSelectDisabled}
                    />
                    <VerticalLabeledSelect
                        id={'item-filter'}
                        idLabel={'item-filter-select-label'}
                        labelText={'Фільтр'}
                        value={itemFilter}
                        onChange={setItemFilter}
                        selectItems={characteristicValuesItems}
                        defaultLabel={'Оберіть значення характеристики для фільтра'}
                        disabled={isCharacteristicValuesSelectDisabled}
                    />
                </Container>
            </Box>
            {isLoading && <Loader dialogProgress />}
        </>
    )
}

export default MegaMenuModalAddNewFilterContent
