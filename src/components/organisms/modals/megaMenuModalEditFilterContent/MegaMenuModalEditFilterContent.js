import React, { useEffect, useMemo, useState } from 'react'
import VerticalLabeledOutlinedInput from '../../../molecules/inputs/verticalLabeledOutlinedInput/VerticalLabeledOutlinedInput'
import VerticalLabeledOutlinedInputNumber from '../../../molecules/inputs/verticalLabeledOutlinedInputNumber/VerticalLabeledOutlinedInputNumber'
import VerticalLabeledSelect from '../../../molecules/inputs/verticalLabeledSelect/VerticalLabeledSelect'
import { useGetMegaMenuItemQuery, useUpdateMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { createCategoriesWithGoodsItems } from '../../../../common/categories/getCategoriesForSelect'
import { useGetCategoriesQuery } from '../../../../api/categoriesApiNew'
import { useGetCategoryFacetsQuery } from '../../../../api/facetsApi'
import { createCharacteristicItems, createCharacteristicValueItems } from '../../../../common/getFacetsForSelect/getFacetsForSelect'
import { changeToObjectWithId, createValueForUpdating } from '../../../../common/preparingDataForSending/preparingDataForSending'
import Loader from '../../../molecules/loader/Loader'
import AdminPageHeader from '../../../molecules/headers/adminPageHeader/AdminPageHeader'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import FilterIcon from '../../../atoms/icons/filterIcon/FilterIcon'
import Box from '../../../atoms/wrappers/box/Box'
import Container from '../../../templates/container/Container'

const MegaMenuModalEditFilterContent = ({ open, onClose, itemIdForEdition, baseUrl, facetQueryParameter, onOpenErrorModal }) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(null)
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

    const {
        data: item,
        isLoading: isItemLoading,
        isFetching: isItemFetching,
        isError: isItemError,
    } = useGetMegaMenuItemQuery(itemIdForEdition, {
        skip: !open || !itemIdForEdition,
    })

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
        skip: !open || !item,
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

    useEffect(() => {
        if (item === undefined) return
        setItemName(item.name)
        setItemSortOrder(item.ordering)
        if (categoryItems && categoryItems.length > 0) {
            setItemCategory(parseInt(item.url.match(new RegExp(`${baseUrl}/\\d*`))[0].split('/')[2]))
        }
    }, [item, setItemName, setItemSortOrder, setItemCategory, categoryItems])

    const [characteristicItems, setCharacteristicItems] = useState([])

    useEffect(() => {
        if (
            categoryFacets &&
            Object.keys(categoryFacets).find(key =>
                categoryFacets[key].find(value => value.characteristicValueId === parseInt(item.url.match(/=\d*$/)[0].slice(1)))
            )
        ) {
            setCharacteristicItems(createCharacteristicItems(categoryFacets))
            setItemCharacteristic(
                Object.keys(categoryFacets).find(key =>
                    categoryFacets[key].find(value => value.characteristicValueId === parseInt(item.url.match(/=\d*$/)[0].slice(1)))
                )
            )
        }
    }, [categoryFacets, setItemCharacteristic, setCharacteristicItems])

    useEffect(() => {
        if (categoryFacets && itemCategory !== parseInt(item.url.match(/\/categories\/\d*/)[0].split('/')[2])) {
            setCharacteristicItems(createCharacteristicItems(categoryFacets))
            setItemCharacteristic(null)
        }
    }, [categoryFacets, itemCategory, setCharacteristicItems, createCharacteristicItems, setItemCharacteristic])

    const [characteristicValuesItems, setCharacteristicValueItems] = useState([])

    useEffect(() => {
        if (categoryFacets && itemCharacteristic) {
            setCharacteristicValueItems(createCharacteristicValueItems(categoryFacets, itemCharacteristic))
            setItemFilter(null)
        }
    }, [categoryFacets, itemCharacteristic, setCharacteristicValueItems])

    useEffect(() => {
        if (
            characteristicValuesItems.length > 0 &&
            !!characteristicValuesItems.find(valueItem => valueItem.id === parseInt(item.url.match(/=\d*$/)[0].slice(1)))
        ) {
            setItemFilter(parseInt(item.url.match(/=\d*$/)[0].slice(1)))
        }
    }, [characteristicValuesItems, setItemFilter])

    const isCategoriesSelectDisabled = isCategoriesLoading || isCategoriesFetching || isCategoriesError

    const isCharacteristicsSelectDisabled =
        isFacetsLoading || isFacetsFetching || isFacetsError || itemCategory === null || isCategoriesSelectDisabled

    const isCharacteristicValuesSelectDisabled = itemCharacteristic === null || isCharacteristicsSelectDisabled

    const valueForUpdating = useMemo(
        () =>
            item &&
            itemName &&
            itemSortOrder !== null &&
            itemCategory &&
            createValueForUpdating(
                changeToObjectWithId(item, ['parentItem']),
                {
                    id: item.id,
                    name: itemName.trim(),
                    ordering: itemSortOrder,
                    parentItem: item.parentItem ? { id: item.parentItem } : item.parentItem,
                    url: `${baseUrl}/${itemCategory}?${facetQueryParameter}=${itemFilter}`,
                },
                ['command', 'subItemList']
            ),
        [createValueForUpdating, changeToObjectWithId, item, itemName, itemSortOrder, itemCategory, itemFilter]
    )

    const isChanges = !!valueForUpdating

    const isSaveButtonDisabled =
        itemName === null ||
        itemName.trim() === '' ||
        itemSortOrder === null ||
        itemCategory === null ||
        itemCharacteristic === null ||
        itemFilter === null ||
        !isChanges

    const [updateMegaMenuItem, { isError: isNewMegaMenuItemAddError, isLoading: isMegaMenuItemUpdating }] = useUpdateMegaMenuItemMutation()

    const isLoading =
        isItemLoading ||
        isItemFetching ||
        isCategoriesLoading ||
        isCategoriesFetching ||
        isFacetsLoading ||
        isFacetsFetching ||
        isMegaMenuItemUpdating

    const isError = isItemError || isCategoriesError || isFacetsError || isNewMegaMenuItemAddError

    useEffect(() => {
        if (isError === false) return
        onOpenErrorModal(true)
    }, [isError])

    const handleUpdateItem = () => {
        updateMegaMenuItem(valueForUpdating)
            .unwrap()
            .then(() => {
                onClose()
            })
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
                    <IconButton key={1} dialogButton disableRipple onClick={handleUpdateItem} disabled={isSaveButtonDisabled}>
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

export default MegaMenuModalEditFilterContent
