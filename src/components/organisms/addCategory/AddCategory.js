import React, { useState } from 'react'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import LabeledTextField from '../../molecules/inputs/labeledTextField/LabeledTextField'
import LabeledSwitch from '../../molecules/inputs/labeledSwitch/LabeledSwitch'
import LabeledSelectField from '../../molecules/inputs/labeledSelectField/LabeledSelectField'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import LabeledTextLabels from '../../molecules/inputs/lageledTextLabels/LabeledTextLabels'
import AdminModal from '../../molecules/modals/adminModal/AdminModal'
import Box from '../../atoms/wrappers/box/Box'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import Typography from '../../atoms/textElements/typography/Typography'
import List from '../../atoms/list/list/List'
import ListItem from '../../atoms/list/listItem/ListItem'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'
import ListItemText from '../../atoms/list/listItemText/ListItemText'
import SetIcon from '../../atoms/icons/setIcon/SetIcon'
import ShowIcon from '../../atoms/icons/showIcon/ShowIcon'
import { Fade } from '@mui/material'
import Switch from '../../molecules/inputs/switch/Switch'
import CharacteristicGroupItemReadOnly from '../../molecules/list/characteristicGroupItemReadOnly/CharacteristicGroupItemReadOnly'
import CharacteristicItemReadOnly from '../../molecules/list/characteristicItemReadOnly/CharacteristicItemReadOnly'
import { totalStringValues } from '../../../common/commonValueFunction'

const createCategoryItems = categories => {
    let categoryItems = []

    const createItems = category => {
        if (category.categoryType !== 'WITH_GOODS') {
            categoryItems.push({
                id: category.id,
                label: category.name,
                value: category.id,
            })
        }
        if (Array.isArray(category.subCategories) && category.subCategories.length !== 0 && category.subCategories[0] !== null) {
            category.subCategories.forEach(subCategory => createItems(subCategory))
        }
    }

    if (categories) {
        categories.forEach(category => createItems(category))
    }

    return categoryItems
}

const AddCategory = ({
    icon,
    title,
    buttons,
    categoryFields,
    changeCategoryFieldValues,
    changeCategoryType,
    changeCategoryParent,
    categories,
    mode = 'addCategory',
    disabledSwitchCategoryType = false,
    categoryTypeTooltip,
    sets,
    handleAddRemoveSetInCategory,
    isSetInCategory,
}) => {
    let parentCategories = createCategoryItems(categories).sort((el1, el2) => (el1.label > el2.label ? 1 : -1))

    const [openCharacteristicSetsListModal, setOpenCharacteristicSetsListModal] = useState(false)

    const handleOpenCharacteristicSetsListModal = () => {
        setOpenCharacteristicSetsListModal(true)
    }

    const handleCloseCharacteristicSetsListModal = () => {
        setOpenCharacteristicSetsListModal(false)
    }

    const [activeSetItem, setActiveSetItem] = useState(null)

    const handleMouseEnterSetItem = id => () => setActiveSetItem(id)

    const handleMouseLeaveSetItem = () => setActiveSetItem(null)

    const [characteristicSetForOpen, setCharacteristicSetForOpen] = useState(null)

    const handleOpenCharacteristicSetModal = set => () => {
        setCharacteristicSetForOpen(set)
    }

    const handleCloseCharacteristicSetModal = () => {
        setCharacteristicSetForOpen(null)
    }

    const [activeCharacteristicItem, setActiveCharacteristicItem] = useState(null)

    const handleMouseEnterCharacteristicItem = id => () => setActiveCharacteristicItem(id)

    const handleMouseLeaveCharacteristicItem = () => setActiveCharacteristicItem(null)

    const [characteristicForOpen, setCharacteristicForOpen] = useState(null)

    const handleOpenCharacteristicModal = characteristic => () => {
        setCharacteristicForOpen(characteristic)
    }

    const handleCloseCharacteristicModal = () => {
        setCharacteristicForOpen(null)
    }

    const isWithGoodsCategory = categoryFields.categoryType === 'WITH_GOODS'

    return (
        <MaxWidthTemplate>
            <AdminPageHeader icon={icon} title={title} buttons={buttons} />
            <AdminPageBorder>
                <LabeledTextField
                    id={'categoryName'}
                    label={'Название категории'}
                    placeholder={'Введите название категории товара'}
                    name={'name'}
                    value={categoryFields['name']}
                    onChange={changeCategoryFieldValues}
                    autoFocus
                />
                <LabeledSwitch
                    id={'isGoodCategory'}
                    label={'Категория с товарами'}
                    name={'categoryType'}
                    checked={categoryFields['categoryType'] === 'WITH_GOODS'}
                    onChange={changeCategoryType}
                    disabled={mode === 'editCategory' && disabledSwitchCategoryType}
                    tooltip={categoryTypeTooltip}
                />
                <LabeledSelectField
                    id={'parentCategory'}
                    label={'Родительская категория'}
                    name={'parentCategory'}
                    value={categoryFields['parentCategory'] ? categoryFields['parentCategory'].id : categoryFields['parentCategory']}
                    onChange={changeCategoryParent}
                    items={parentCategories}
                    defaultLabel={'Корневая категория'}
                    isStartItemDisabled={false}
                />
                {isWithGoodsCategory && (
                    <LabeledTextLabels
                        id={'characteristicSets'}
                        label={'Наборы характеристик'}
                        items={[...categoryFields.characteristicSets].sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))}
                        buttonText={
                            categoryFields.characteristicSets.length === 0
                                ? 'Добавить набор характеристик'
                                : 'Добавить/Удалить набор характеристик'
                        }
                        buttonIcon={<AddIcon dialogIcon />}
                        onClick={handleOpenCharacteristicSetsListModal}
                        itemIcon={<SetIcon dialogIcon />}
                        propertiesForSting={[
                            { itemsProperty: 'characteristicsGroup', propertyName: 'name' },
                            { itemsProperty: 'characteristics', propertyName: 'name' },
                        ]}
                    />
                )}
            </AdminPageBorder>
            <AdminModal
                open={openCharacteristicSetsListModal}
                onClose={handleCloseCharacteristicSetsListModal}
                title={'Наборы характеристик'}
                buttons={[
                    <IconButton key={0} dialogButton disableRipple onClick={handleCloseCharacteristicSetsListModal} autoFocus>
                        <UndoIcon />
                    </IconButton>,
                ]}
            >
                <Box marginTop7>
                    {sets.length === 0 ? (
                        <Typography mainAdminText>Нет &quot;свободных&quot; характеристик :(</Typography>
                    ) : (
                        <List component={'ol'}>
                            {[...sets]
                                .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                .map(set => (
                                    <ListItem
                                        key={set.id}
                                        onMouseEnter={handleMouseEnterSetItem(set.id)}
                                        onMouseLeave={handleMouseLeaveSetItem}
                                        dialogItem
                                    >
                                        <Box flexGrow1>
                                            <FlexTemplate spaceBetween alignItemsCenter gap10>
                                                <FlexTemplate alignItemsCenter gap7>
                                                    <SetIcon dialogIcon />
                                                    <ListItemText dialogItem primary={set.name} />
                                                </FlexTemplate>

                                                <FlexTemplate alignItemsCenter gap10>
                                                    <Switch
                                                        name={`switch${set.id}`}
                                                        dialogSwitch
                                                        disableRipple
                                                        checked={isSetInCategory(set.id)}
                                                        onChange={handleAddRemoveSetInCategory(set)}
                                                    />
                                                    <Fade in={activeSetItem === set.id} timeout={0}>
                                                        <div>
                                                            <IconButton
                                                                dialogButton
                                                                disableRipple
                                                                onClick={handleOpenCharacteristicSetModal(set)}
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
                        open={!!characteristicSetForOpen}
                        onClose={handleCloseCharacteristicSetModal}
                        title={'Группы/Характеристики'}
                        buttons={[
                            <IconButton key={0} dialogButton disableRipple onClick={handleCloseCharacteristicSetModal} autoFocus>
                                <UndoIcon />
                            </IconButton>,
                        ]}
                    >
                        <Box marginTop7>
                            {characteristicSetForOpen === null ||
                            (!characteristicSetForOpen.characteristicsGroup.length && !characteristicSetForOpen.characteristics.length) ? (
                                <Typography mainAdminText>Нет &quot;групп&quot;и&quot; характеристик :(</Typography>
                            ) : (
                                <List component={'ol'}>
                                    {[...characteristicSetForOpen.characteristicsGroup]
                                        .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                        .map(characteristicGroup => (
                                            <CharacteristicGroupItemReadOnly
                                                key={characteristicGroup.id}
                                                characteristicGroup={characteristicGroup}
                                                activeCharacteristicItem={activeCharacteristicItem}
                                                onMouseEnterCharacteristicItem={handleMouseEnterCharacteristicItem}
                                                onMouseLeaveCharacteristicItem={handleMouseLeaveCharacteristicItem}
                                                handleOpenCharacteristicModal={handleOpenCharacteristicModal}
                                            />
                                        ))}

                                    {[...characteristicSetForOpen.characteristics]
                                        .sort((firstEl, secondEl) => (firstEl.name > secondEl.name ? 1 : -1))
                                        .map(characteristic => (
                                            <CharacteristicItemReadOnly
                                                key={characteristic.id}
                                                characteristic={characteristic}
                                                activeCharacteristicItem={activeCharacteristicItem}
                                                handleMouseEnterCharacteristicItem={handleMouseEnterCharacteristicItem}
                                                handleMouseLeaveCharacteristicItem={handleMouseLeaveCharacteristicItem}
                                                handleOpenCharacteristicModal={handleOpenCharacteristicModal}
                                            />
                                        ))}
                                </List>
                            )}
                            <AdminModal
                                open={!!characteristicForOpen}
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
                </Box>
            </AdminModal>
        </MaxWidthTemplate>
    )
}

export default AddCategory
