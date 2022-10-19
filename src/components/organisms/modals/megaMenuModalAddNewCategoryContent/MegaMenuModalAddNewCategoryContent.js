import React, { useEffect, useMemo, useState } from 'react'
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
import { createCategoriesWithSubcategoriesItems } from '../../../../common/categories/getCategoriesForSelect'
import { useGetCategoriesQuery } from '../../../../api/categoriesApiNew'
import { useAddMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { deleteNullValuesFromObject } from '../../../../common/preparingDataForSending/preparingDataForSending'
import FolderIcon from '../../../atoms/icons/folderIcon/FolderIcon'

const MegaMenuModalAddNewCategoryContent = ({ open, onClose, itemsCount = 0, parentItem, baseUrl, onOpenErrorModal }) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(itemsCount + 1)
    const [itemCategory, setItemCategory] = useState(null)

    const categoriesWithSubCategoriesItems = data =>
        useMemo(
            () => createCategoriesWithSubcategoriesItems(data).sort((el1, el2) => (el1.label > el2.label ? 1 : -1)),
            [data, createCategoriesWithSubcategoriesItems]
        )

    const {
        categoryItems,
        isLoading: isCategoryLoading,
        isFetching: isCategoryFetching,
        isError: isCategoryError,
    } = useGetCategoriesQuery('', {
        skip: !open,
        selectFromResult: ({ data, isLoading, isFetching, isError }) => ({
            categoryItems: categoriesWithSubCategoriesItems(data),
            isLoading,
            isFetching,
            isError,
        }),
    })

    useEffect(() => {
        setItemSortOrder(itemsCount + 1)
    }, [itemsCount, setItemSortOrder])

    const isSaveButtonDisabled = itemName === null || itemName.trim() === '' || itemSortOrder === null || itemCategory === null

    const [addMegaMenuItem, { isError: isNewMegaMenuItemAddError, isLoading: isNewMegaMenuAdding }] = useAddMegaMenuItemMutation()

    const isCategoriesSelectDisabled = isCategoryLoading || isCategoryFetching || isCategoryError

    const isLoading = isCategoryLoading || isCategoryFetching || isNewMegaMenuAdding

    const isError = isCategoryError || isNewMegaMenuItemAddError

    useEffect(() => {
        if (isError === false) return
        onOpenErrorModal()
    }, [isError])

    const handleSaveNewItem = () => {
        addMegaMenuItem(
            deleteNullValuesFromObject({
                name: itemName.trim(),
                ordering: itemSortOrder,
                url: `${baseUrl}/${itemCategory}`,
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
                title={'Пункт з категоріями'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={onClose}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewItem} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                icon={<FolderIcon dialogIcon />}
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

export default MegaMenuModalAddNewCategoryContent
