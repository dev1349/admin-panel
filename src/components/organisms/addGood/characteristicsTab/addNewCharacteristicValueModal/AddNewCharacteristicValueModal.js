import React, { useRef, useState } from 'react'
import IconButton from '../../../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../../../atoms/icons/undoIcon/UndoIcon'
import Box from '../../../../atoms/wrappers/box/Box'
import List from '../../../../atoms/list/list/List'
import ListItem from '../../../../atoms/list/listItem/ListItem'
import ListItemText from '../../../../atoms/list/listItemText/ListItemText'
import ListDivider from '../../../../atoms/list/listDivider/ListDivider'
import DeleteIcon from '../../../../atoms/icons/deleteIcon/DeleteIcon'
import TextFieldWithButton from '../../../../molecules/inputs/textFieldWithButton/TextFieldWithButton'
import AdminModal from '../../../../molecules/modals/adminModal/AdminModal'
import AddIcon from '../../../../atoms/icons/addIcon/AddIcon'
import SaveIcon from '../../../../atoms/icons/saveIcon/SaveIcon'

const AddNewCharacteristicValueModal = ({
    openAddValueWindow,
    closeAddValueWindow,
    activeCharacteristic,
    saveCharacteristicNewValues,
    addNewValueModalTitle,
}) => {
    const [characteristicNewValue, setCharacteristicNewValue] = useState(null)

    const handleChangeNewValue = payload => {
        setCharacteristicNewValue(payload[Object.keys(payload)[0]])
    }

    const [characteristicNewValues, setCharacteristicNewValues] = useState(null)

    const textFieldRef = useRef(null)

    const handleAddCharacteristicNewValue = () => {
        setCharacteristicNewValues(prev => {
            if (prev === null) {
                return [{ value: characteristicNewValue }]
            }
            return [...prev, { value: characteristicNewValue }].reverse()
        })
        setCharacteristicNewValue(null)
        textFieldRef.current.focus()
    }

    const handleKeyUpTextField = event => {
        if (event.code !== 'Enter') return
        if (characteristicNewValue ? characteristicNewValue.trim() : false) {
            handleAddCharacteristicNewValue()
        }
    }

    const handleDeleteNewValue = index => () => {
        setCharacteristicNewValues(prev => {
            let copyPrev = [...prev]
            copyPrev.splice(index, 1)
            if (copyPrev.length !== 0) {
                return copyPrev
            }
            return null
        })
        textFieldRef.current.focus()
    }

    const handleCloseAddValueWindow = () => {
        setCharacteristicNewValue(null)
        setCharacteristicNewValues(null)
        closeAddValueWindow()
    }

    const handleSaveCharacteristicNewValue = (characteristicNewValues, activeCharacteristicId) => () => {
        const characteristic = { id: activeCharacteristicId, characteristicValues: characteristicNewValues }
        saveCharacteristicNewValues(characteristic)
        handleCloseAddValueWindow()
    }

    const isCharacteristicValuesListNotEmpty = activeCharacteristic =>
        activeCharacteristic?.characteristicValues && activeCharacteristic?.characteristicValues.length !== 0

    const isCharacteristicNewValuesListNotEmpty = (activeCharacteristic, newCharacteristicsValues) =>
        activeCharacteristic && newCharacteristicsValues && newCharacteristicsValues.length !== 0

    const isSaveButtonDisabled = characteristicNewValues === null

    const isAddNewCharacteristicValueButtonDisabled =
        !(characteristicNewValue ? characteristicNewValue.trim() : false) ||
        (characteristicNewValue &&
            activeCharacteristic.characteristicValues &&
            activeCharacteristic.characteristicValues !== null &&
            activeCharacteristic.characteristicValues.some(value => value.value === characteristicNewValue)) ||
        (characteristicNewValue &&
            characteristicNewValues !== null &&
            characteristicNewValues.some(value => value.value === characteristicNewValue))

    return (
        <AdminModal
            open={openAddValueWindow}
            onClose={handleCloseAddValueWindow}
            title={addNewValueModalTitle}
            buttons={[
                <IconButton key={0} dialogButton disableRipple onClick={handleCloseAddValueWindow} autoFocus>
                    <UndoIcon />
                </IconButton>,
                <IconButton
                    key={1}
                    dialogButton
                    disableRipple
                    onClick={handleSaveCharacteristicNewValue(characteristicNewValues, activeCharacteristic?.id)}
                    autoFocus
                    disabled={isSaveButtonDisabled}
                >
                    <SaveIcon />
                </IconButton>,
            ]}
        >
            <Box marginTop7>
                <TextFieldWithButton
                    button={
                        <IconButton
                            disableRipple
                            dialogButton
                            onClick={handleAddCharacteristicNewValue}
                            autoFocus
                            disabled={isAddNewCharacteristicValueButtonDisabled}
                        >
                            <AddIcon />
                        </IconButton>
                    }
                    name={'characteristicNewValue'}
                    value={characteristicNewValue}
                    onChange={handleChangeNewValue}
                    autoFocus
                    textFieldRef={textFieldRef}
                    onKeyUp={handleKeyUpTextField}
                />
                <List component={'ol'}>
                    {isCharacteristicNewValuesListNotEmpty(activeCharacteristic, characteristicNewValues) &&
                        [...characteristicNewValues].map((value, index) => {
                            return (
                                <ListItem key={`newValue-${index}`} dialogItem>
                                    <ListItemText dialogItem primary={`${index + 1}) ${value.value}`} />
                                    <IconButton disableRipple dialogButton onClick={handleDeleteNewValue(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            )
                        })}
                    {isCharacteristicValuesListNotEmpty(activeCharacteristic) &&
                        isCharacteristicNewValuesListNotEmpty(activeCharacteristic, characteristicNewValues) && (
                            <ListDivider dialogDivider />
                        )}
                    {isCharacteristicValuesListNotEmpty(activeCharacteristic) &&
                        [...activeCharacteristic?.characteristicValues].map((value, index) => {
                            const itemIndex =
                                characteristicNewValues && characteristicNewValues.length !== 0
                                    ? index + 1 + characteristicNewValues.length
                                    : index + 1
                            return (
                                <ListItem key={value.id} dialogItem>
                                    <ListItemText dialogItem primary={`${itemIndex}) ${value.value}`} />
                                </ListItem>
                            )
                        })}
                </List>
            </Box>
        </AdminModal>
    )
}

export default AddNewCharacteristicValueModal
