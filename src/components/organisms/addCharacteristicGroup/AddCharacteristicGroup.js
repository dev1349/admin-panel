import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/AdminPageBorder/AdminPageBorder'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledNumberField from '../../molecules/inputs/labeledNumberField/LabeledNumberField'
import LabeledSwitch from '../../molecules/inputs/labeledSwitch/LabeledSwitch'
import LabeledTextLabels from '../../molecules/inputs/lageledTextLabels/LabeledTextLabels'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import List from '../../atoms/list/list/List'
import ListItem from '../../atoms/list/listItem/ListItem'
import ListItemText from '../../atoms/list/listItemText/ListItemText'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'
import Switch from '../../molecules/inputs/switch/Switch'
import Box from '../../../components/atoms/wrappers/box/Box'
import ShowIcon from '../../atoms/icons/showIcon/ShowIcon'
import { Fade } from '@mui/material'
import Typography from '../../atoms/textElements/typography/Typography'
import { stringValues } from '../../../common/commonValueFunction'
import AdminModal from '../../molecules/modals/adminModal/AdminModal'

const AddCharacteristicGroup = ({
    icon,
    title,
    buttons,
    characteristicGroupField,
    changeCharacteristicGroupFields,
    characteristics,
    isOpenCharacteristicListModal,
    onOpenCharacteristicListModal,
    onCloseCharacteristicListModal,
    isCharacteristicInGroup,
    addRemoveCharacteristic,
    orderNumberHelper,
}) => {
    const [activeListItem, setActiveListItem] = useState(null)

    const handleMouseEnterListItem = id => () => setActiveListItem(id)

    const handleMouseLeaveListItem = () => setActiveListItem(null)

    const [characteristicForOpen, setCharacteristicForOpen] = useState(null)

    const isCharacteristicModalOpen = !!characteristicForOpen

    const handleCloseCharacteristicModal = () => setCharacteristicForOpen(null)

    const handleOpenCharacteristicModal = characteristic => () => setCharacteristicForOpen(characteristic)

    return (
        <MaxWidthTemplate>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <LabeledTextField
                    id={'name'}
                    label={'Название группы характеристик'}
                    placeholder={'Введите название группы характеристик товара'}
                    name={'name'}
                    value={characteristicGroupField['name']}
                    onChange={changeCharacteristicGroupFields}
                    autoFocus
                    inputProps={{
                        'aria-label': 'name of characteristic group',
                    }}
                />
                <LabeledNumberField
                    id={'orderNumber'}
                    label={'Порядковый номер'}
                    placeholder={'Введите порядковый номер отображения группы характеристики товара'}
                    name={'orderNumber'}
                    value={characteristicGroupField['orderNumber']}
                    onChange={changeCharacteristicGroupFields}
                    inputProps={{ 'aria-label': 'order number' }}
                    helperText={orderNumberHelper}
                />
                <LabeledSwitch
                    id={'isAdminOnly'}
                    label={'Только для администратора'}
                    name={'isAdminOnly'}
                    checked={characteristicGroupField['isAdminOnly']}
                    onChange={changeCharacteristicGroupFields}
                    inputProps={{ 'aria-label': 'only for administrator' }}
                />
                <LabeledTextLabels
                    id={'characteristics'}
                    label={'Характеристики в группе'}
                    characteristics={characteristicGroupField.characteristics}
                    buttonText={
                        characteristicGroupField.characteristics.length === 0
                            ? 'Добавить характеристику'
                            : 'Добавить/Удалить характеристики'
                    }
                    buttonIcon={<AddIcon dialogIcon />}
                    onClick={onOpenCharacteristicListModal}
                />
                <AdminModal
                    open={isOpenCharacteristicListModal}
                    onClose={onCloseCharacteristicListModal}
                    title={'Характеристики'}
                    buttons={[
                        <IconButton key={0} dialogButton disableRipple onClick={onCloseCharacteristicListModal} autoFocus>
                            <UndoIcon />
                        </IconButton>,
                    ]}
                >
                    <Box marginTop7>
                        {characteristics.length === 0 ? (
                            <Typography mainAdminText>Нет &quot;свободных&quot; характеристик :(</Typography>
                        ) : (
                            <List component={'ol'}>
                                {[...characteristics]
                                    .sort((firstEl, secondEl) => firstEl.name > secondEl.name)
                                    .map((characteristic, index) => (
                                        <ListItem
                                            key={characteristic.id}
                                            onMouseEnter={handleMouseEnterListItem(characteristic.id)}
                                            onMouseLeave={handleMouseLeaveListItem}
                                            dialogItem
                                        >
                                            <Box flexGrow1>
                                                <FlexTemplate spaceBetween alignItemsCenter gap10>
                                                    <ListItemText dialogItem primary={`${index + 1}) ${characteristic.name}`} />
                                                    <FlexTemplate alignItemsCenter gap10>
                                                        <Switch
                                                            name={`switch${characteristic.id}`}
                                                            dialogSwitch
                                                            disableRipple
                                                            checked={isCharacteristicInGroup(characteristic.id)}
                                                            onChange={addRemoveCharacteristic(characteristic)}
                                                        />
                                                        <Fade in={activeListItem === characteristic.id} timeout={0}>
                                                            <div>
                                                                <IconButton
                                                                    dialogButton
                                                                    disableRipple
                                                                    onClick={handleOpenCharacteristicModal(characteristic)}
                                                                >
                                                                    <ShowIcon />
                                                                </IconButton>
                                                            </div>
                                                        </Fade>
                                                    </FlexTemplate>
                                                </FlexTemplate>
                                            </Box>
                                        </ListItem>
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
                                        primary={`5) Значения характеристики: ${stringValues(
                                            characteristicForOpen?.characteristicValues,
                                            40,
                                            'value'
                                        )}`}
                                        dialogItem
                                    />
                                </ListItem>
                            </List>
                        </AdminModal>
                    </Box>
                </AdminModal>
            </AdminPageBorder>
        </MaxWidthTemplate>
    )
}

export default AddCharacteristicGroup
