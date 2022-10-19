import React, { useEffect, useState } from 'react'
import { useAddMegaMenuItemMutation } from '../../../../api/megaMenuApi'
import { deleteNullValuesFromObject } from '../../../../common/preparingDataForSending/preparingDataForSending'
import AdminPageHeader from '../../../molecules/headers/adminPageHeader/AdminPageHeader'
import IconButton from '../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../../atoms/icons/saveIcon/SaveIcon'
import TextIcon from '../../../atoms/icons/textIcon/TextIcon'
import Box from '../../../atoms/wrappers/box/Box'
import Container from '../../../templates/container/Container'
import VerticalLabeledOutlinedInput from '../../../molecules/inputs/verticalLabeledOutlinedInput/VerticalLabeledOutlinedInput'
import VerticalLabeledOutlinedInputNumber from '../../../molecules/inputs/verticalLabeledOutlinedInputNumber/VerticalLabeledOutlinedInputNumber'
import Loader from '../../../molecules/loader/Loader'

const MegaMenuModalAddNewTextContent = ({ onClose, itemsCount = 0, parentItem, onOpenErrorModal }) => {
    const [itemName, setItemName] = useState(null)
    const [itemSortOrder, setItemSortOrder] = useState(itemsCount + 1)

    useEffect(() => {
        setItemSortOrder(itemsCount + 1)
    }, [itemsCount, setItemSortOrder])

    const isSaveButtonDisabled = itemName === null || itemName.trim() === '' || itemSortOrder === null

    const [addMegaMenuItem, { isError, isLoading }] = useAddMegaMenuItemMutation()

    useEffect(() => {
        if (isError === false) return
        onOpenErrorModal(true)
    }, [isError])

    const handleSaveNewItem = () => {
        addMegaMenuItem(
            deleteNullValuesFromObject({
                name: itemName.trim(),
                ordering: itemSortOrder,
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
                title={'Пункт без посилання'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={onClose}>
                        <UndoIcon />
                    </IconButton>,
                    <IconButton key={1} dialogButton disableRipple onClick={handleSaveNewItem} disabled={isSaveButtonDisabled}>
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

export default MegaMenuModalAddNewTextContent
