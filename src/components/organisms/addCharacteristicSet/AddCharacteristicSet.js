import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import LabeledTotalLabels from '../../molecules/inputs/labeledTotalLabels/LabeledTotalLabels'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import AdminModal from '../../molecules/modals/adminModal/AdminModal'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import Box from '../../atoms/wrappers/box/Box'
import Typography from '../../atoms/textElements/typography/Typography'
import List from '../../atoms/list/list/List'
import CharacteristicGroupItem from '../../molecules/list/characteristicGroupItem/CharacteristicGroupItem'
import CharacteristicItem from '../../molecules/list/characteristicItem/CharacteristicItem'
import ListItem from '../../atoms/list/listItem/ListItem'
import ListItemText from '../../atoms/list/listItemText/ListItemText'
import { totalStringValues } from '../../../common/commonValueFunction'

const AddCharacteristicSet = ({
    icon,
    title,
    buttons,
    characteristicSetFieldValues,
    changeCharacteristicFieldValues,
    characteristicGroups,
    characteristicsWithoutGroup,
    isCharacteristicInSet,
    addRemoveCharacteristicInSet,
    isCharacteristicGroupInSet,
    addRemoveCharacteristicGroupInSet,
    addRemoveCharacteristicInSetGroup,
}) => {
    const [openCharacteristicsGroupsListModal, setOpenCharacteristicsGroupsListModal] = useState(false)

    const handleOpenCharacteristicsGroupsListModal = () => {
        setOpenCharacteristicsGroupsListModal(true)
    }

    const handleCloseCharacteristicsGroupsListModal = () => {
        setOpenCharacteristicsGroupsListModal(false)
    }

    const totalCharacteristicsGroupsLength = characteristicGroups.length + characteristicsWithoutGroup.length

    const [activeCharacteristicItem, setActiveCharacteristicItem] = useState(null)

    const handleMouseEnterCharacteristicItem = id => () => setActiveCharacteristicItem(id)

    const handleMouseLeaveCharacteristicItem = () => setActiveCharacteristicItem(null)

    const [characteristicForOpen, setCharacteristicForOpen] = useState(null)

    const isCharacteristicModalOpen = !!characteristicForOpen

    const handleCloseCharacteristicModal = () => setCharacteristicForOpen(null)

    const handleOpenCharacteristicModal = characteristic => () => setCharacteristicForOpen(characteristic)

    const characteristicsCount =
        characteristicSetFieldValues.characteristics.length +
        characteristicSetFieldValues.characteristicsGroup.reduce((acc, currentGroup) => acc + currentGroup.characteristics.length, 0)

    return (
        <>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <LabeledTextField
                    id={'name'}
                    label={'Название набора характеристик *'}
                    placeholder={'Введите название набора характеристик товара'}
                    name={'name'}
                    value={characteristicSetFieldValues['name']}
                    onChange={changeCharacteristicFieldValues}
                    autoFocus
                    inputProps={{ 'aria-label': 'name of characteristics set' }}
                />
                <LabeledTotalLabels
                    id={'totalCountOfCharacteristicsAndCharacteristicsGroup'}
                    label={'Характеристики в наборе'}
                    totalCount={characteristicsCount}
                    buttonText={characteristicsCount === 0 ? 'Добавить группу/характеристику' : 'Добавить/Удалить группу/характеристику'}
                    buttonIcon={<AddIcon />}
                    onClick={handleOpenCharacteristicsGroupsListModal}
                />
            </AdminPageBorder>
            <AdminModal
                open={openCharacteristicsGroupsListModal}
                onClose={handleCloseCharacteristicsGroupsListModal}
                title={'Группы/Характеристики'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleCloseCharacteristicsGroupsListModal} autoFocus>
                        <UndoIcon />
                    </IconButton>,
                ]}
            >
                <Box marginTop7>
                    {totalCharacteristicsGroupsLength === 0 ? (
                        <Typography mainAdminText>Нет &quot;групп&quot;и&quot; характеристик :(</Typography>
                    ) : (
                        <List component={'ol'}>
                            {[...characteristicGroups]
                                .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                .map(characteristicGroup => (
                                    <CharacteristicGroupItem
                                        key={characteristicGroup.id}
                                        characteristicGroup={characteristicGroup}
                                        activeCharacteristicItem={activeCharacteristicItem}
                                        onMouseEnterCharacteristicItem={handleMouseEnterCharacteristicItem}
                                        onMouseLeaveCharacteristicItem={handleMouseLeaveCharacteristicItem}
                                        handleOpenCharacteristicModal={handleOpenCharacteristicModal}
                                        isCharacteristicGroupInSet={isCharacteristicGroupInSet}
                                        isCharacteristicInSet={isCharacteristicInSet}
                                        addRemoveCharacteristicGroupInSet={addRemoveCharacteristicGroupInSet}
                                        addRemoveCharacteristicInSetGroup={addRemoveCharacteristicInSetGroup}
                                    />
                                ))}

                            {[...characteristicsWithoutGroup]
                                .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                .map(characteristic => (
                                    <CharacteristicItem
                                        key={characteristic.id}
                                        characteristic={characteristic}
                                        activeCharacteristicItem={activeCharacteristicItem}
                                        handleMouseEnterCharacteristicItem={handleMouseEnterCharacteristicItem}
                                        handleMouseLeaveCharacteristicItem={handleMouseLeaveCharacteristicItem}
                                        handleOpenCharacteristicModal={handleOpenCharacteristicModal}
                                        isCharacteristicInSet={isCharacteristicInSet}
                                        addRemoveCharacteristicInSet={addRemoveCharacteristicInSet}
                                    />
                                ))}
                        </List>
                    )}
                    <AdminModal
                        open={isCharacteristicModalOpen}
                        onClose={handleCloseCharacteristicModal}
                        title={'Характеристика'}
                        buttons={[
                            <IconButton key={0} dialogButton disableRipple onClick={handleCloseCharacteristicModal} autoFocus>
                                <UndoIcon />
                            </IconButton>,
                        ]}
                    >
                        <List component={'ol'}>
                            <ListItem dialogItem>
                                <ListItemText primary={`1) Имя характеристики: ${characteristicForOpen?.name}`} dialogItem />
                            </ListItem>
                            <ListItem dialogItem>
                                <ListItemText primary={`2) Порядковый номер: ${characteristicForOpen?.orderNumber}`} dialogItem />
                            </ListItem>
                            <ListItem dialogItem>
                                <ListItemText
                                    primary={`3) Только для администратора: ${characteristicForOpen?.isAdminOnly ? 'Да' : 'Нет'}`}
                                    dialogItem
                                />
                            </ListItem>
                            <ListItem dialogItem>
                                <ListItemText
                                    primary={`4) Для фильтрации: ${characteristicForOpen?.isAvailableInFilter ? 'Да' : 'Нет'}`}
                                    dialogItem
                                />
                            </ListItem>
                            <ListItem dialogItem>
                                <ListItemText
                                    primary={
                                        <>
                                            5) Значения характеристики:&nbsp;
                                            {characteristicForOpen &&
                                                totalStringValues(
                                                    characteristicForOpen,
                                                    [{ itemsProperty: 'characteristicValues', propertyName: 'value' }],
                                                    40
                                                )}
                                        </>
                                    }
                                    dialogItem
                                />
                            </ListItem>
                        </List>
                    </AdminModal>
                </Box>
            </AdminModal>
        </>
    )
}

export default AddCharacteristicSet
