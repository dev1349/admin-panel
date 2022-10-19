import React, { useEffect, useMemo, useState } from 'react'
import { useGetMegaMenuItemQuery, useUpdateMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { createCategoriesWithGoodsItems } from '../../../../common/categories/getCategoriesForSelect'
import { useGetCategoriesQuery } from '../../../../api/categoriesApiNew'
import { changeToObjectWithId, createValueForUpdating } from '../../../../common/preparingDataForSending/preparingDataForSending'
import AdminPageHeader from '../../../molecules/headers/adminPageHeader/AdminPageHeader'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import Box from '../../../atoms/wrappers/box/Box'
import Container from '../../../templates/container/Container'
import VerticalLabeledOutlinedInput from '../../../molecules/inputs/verticalLabeledOutlinedInput/VerticalLabeledOutlinedInput'
import VerticalLabeledOutlinedInputNumber from '../../../molecules/inputs/verticalLabeledOutlinedInputNumber/VerticalLabeledOutlinedInputNumber'
import VerticalLabeledSelect from '../../../molecules/inputs/verticalLabeledSelect/VerticalLabeledSelect'
import Loader from '../../../molecules/loader/Loader'
import CategoryIcon from '../../../atoms/icons/categoryIcon/CategoryIcon'

const MegaMenuModalEditGoodCategoryContent = ({ open, onClose, itemIdForEdition, baseUrl, onOpenErrorModal }) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(null)
    const [itemCategory, setItemCategory] = useState(null)

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
        isLoading: isCategoryLoading,
        isFetching: isCategoryFetching,
        isError: isCategoryError,
    } = useGetCategoriesQuery('', {
        skip: !open || !item,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            categoryItems: categoriesWithGoodCategoriesItems(data),
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
            setItemCategory(parseInt(item.url.match(/\/\d*$/)[0].slice(1)))
        }
    }, [item, setItemName, setItemSortOrder, setItemCategory, categoryItems])

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
                    url: `${baseUrl}/${itemCategory}`,
                },
                ['command', 'subItemList']
            ),
        [createValueForUpdating, changeToObjectWithId, item, itemName, itemSortOrder, itemCategory]
    )

    const isChanges = !!valueForUpdating

    const isSaveButtonDisabled =
        itemName === null || itemName.trim() === '' || itemSortOrder === null || itemCategory === null || !isChanges

    const [updateMegaMenuItem, { isError: isNewMegaMenuItemUpdateError, isLoading: isMegaMenuItemUpdating }] =
        useUpdateMegaMenuItemMutation()

    const isCategoriesSelectDisabled = isCategoryLoading || isCategoryFetching || isCategoryError

    const isLoading = isCategoryLoading || isCategoryFetching || isMegaMenuItemUpdating || isItemLoading || isItemFetching

    const isError = isCategoryError || isNewMegaMenuItemUpdateError || isItemError

    useEffect(() => {
        if (isError === false) return
        onOpenErrorModal()
    }, [isError])

    const handleUpdateItem = () => {
        updateMegaMenuItem(valueForUpdating)
            .unwrap()
            .then(() => onClose())
            .catch(error => console.log(error))
    }

    return (
        <>
            <AdminPageHeader
                title={'Пункт з товарами'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={onClose}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleUpdateItem} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                icon={<CategoryIcon dialogIcon />}
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
                        labelText={'Категорія з підкатегоріями'}
                        value={itemCategory}
                        onChange={setItemCategory}
                        selectItems={categoryItems}
                        disabled={isCategoriesSelectDisabled}
                        defaultLabel={'Оберіть категорію з підкатегоріями'}
                    />
                </Container>
            </Box>
            {isLoading && <Loader dialogProgress />}
        </>
    )
}

export default MegaMenuModalEditGoodCategoryContent
