import React, { useEffect, useMemo, useState } from 'react'
import { useGetMegaMenuItemQuery, useUpdateMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { changeToObjectWithId, createValueForUpdating } from '../../../../common/preparingDataForSending/preparingDataForSending'
import VerticalLabeledOutlinedInput from '../../../molecules/inputs/verticalLabeledOutlinedInput/VerticalLabeledOutlinedInput'
import VerticalLabeledOutlinedInputNumber from '../../../molecules/inputs/verticalLabeledOutlinedInputNumber/VerticalLabeledOutlinedInputNumber'
import AdminPageHeader from '../../../molecules/headers/adminPageHeader/AdminPageHeader'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import Box from '../../../atoms/wrappers/box/Box'
import Container from '../../../templates/container/Container'
import Loader from '../../../molecules/loader/Loader'
import TextIcon from '../../../atoms/icons/textIcon/TextIcon'

const MegaMenuModalEditTextContent = ({ open, onClose, itemIdForEdition, onOpenErrorModal }) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(null)

    const {
        data: item,
        isLoading: isItemLoading,
        isFetching: isItemFetching,
        isError: isItemError,
    } = useGetMegaMenuItemQuery(itemIdForEdition, {
        skip: !open || !itemIdForEdition,
    })

    useEffect(() => {
        if (item === undefined) return
        setItemName(item.name)
        setItemSortOrder(item.ordering)
    }, [item, setItemName, setItemSortOrder])

    const valueForUpdating = useMemo(
        () =>
            item &&
            itemName &&
            itemSortOrder !== null &&
            createValueForUpdating(
                changeToObjectWithId(item, ['parentItem']),
                {
                    id: item.id,
                    name: itemName.trim(),
                    ordering: itemSortOrder,
                    parentItem: item.parentItem ? { id: item.parentItem } : item.parentItem,
                    url: null,
                },
                ['command', 'subItemList']
            ),
        [createValueForUpdating, changeToObjectWithId, item, itemName, itemSortOrder]
    )

    const isChanges = !!valueForUpdating

    const isSaveButtonDisabled = itemName === null || itemName.trim() === '' || itemSortOrder === null || !isChanges

    const [updateMegaMenuItem, { isError: isNewMegaMenuItemUpdateError, isLoading: isMegaMenuUpdating }] = useUpdateMegaMenuItemMutation()

    const isLoading = isMegaMenuUpdating || isItemLoading || isItemFetching

    const isError = isNewMegaMenuItemUpdateError || isItemError

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
                title={'Пункт без посилання'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={onClose}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleUpdateItem} disabled={isSaveButtonDisabled}>
                        <SaveIcon />
                    </IconButton>,
                ]}
                icon={<TextIcon dialogIcon />}
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
                </Container>
            </Box>
            {isLoading && <Loader dialogProgress />}
        </>
    )
}

export default MegaMenuModalEditTextContent
