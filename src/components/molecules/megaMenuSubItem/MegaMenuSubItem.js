import React from 'react'
import Li from '../../atoms/li/Li'
import Container from '../../templates/container/Container'
import Ul from '../../atoms/ul/Ul'
import MegaMenuSubSubItem from '../megaMenuSubSubItem/MegaMenuSubSubItem'
import IconButton from '../buttons/iconButton/IconButton'
import EditIcon from '../../atoms/icons/editIcon/EditIcon'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import MenuItem from '../../atoms/inputs/menuItem/MenuItem'
import ListItemIcon from '../../atoms/list/listItemIcon/ListItemIcon'
import FolderIcon from '../../atoms/icons/folderIcon/FolderIcon'
import ListItemText from '../../atoms/list/listItemText/ListItemText'
import CategoryIcon from '../../atoms/icons/categoryIcon/CategoryIcon'
import FilterIcon from '../../atoms/icons/filterIcon/FilterIcon'
import Menu from '../../atoms/menu/Menu'

const MegaMenuSubItem = ({
    subItem,
    activeSubItemId,
    setActiveSecondLevelItem,
    activeSubSubItemId,
    setActiveThirdLevelItem,
    thirdLevelAnchorEl,
    onClickAddThirdLevelItemButton,
    onCloseAddThirdLevelItemButton,
    onCategoryWithSubCategoryItemClick,
    onCategoryWithGoodsItemClick,
    onFilterItemClick,
    onDeleteMegaMenuItem,
    onChangeMegaMenuItem,
}) => {
    const isAddThirdLevelItemMenuOpen = !!thirdLevelAnchorEl

    const handleMouseMove = () => {
        if (subItem.id === activeSubItemId) return
        setActiveSecondLevelItem(subItem)()
    }

    return (
        <Li catalogSubItem>
            <Container
                catalogSubItemContainer
                activeCatalogSubItemContainer={subItem.id === activeSubItemId}
                onMouseEnter={setActiveSecondLevelItem(subItem)}
                onMouseMove={handleMouseMove}
            >
                {subItem.name}
                {subItem.id === activeSubItemId && (
                    <>
                        <Container catalogSubItemButtonsContainer>
                            <IconButton
                                dialogButton
                                disableRipple
                                editItemButton
                                id={'add-third-level-item-button'}
                                onClick={onClickAddThirdLevelItemButton(subItem)}
                            >
                                <AddIcon />
                            </IconButton>
                            <Menu
                                id={'add-third-level-mega-menu-item'}
                                anchorEl={thirdLevelAnchorEl}
                                open={isAddThirdLevelItemMenuOpen}
                                onClose={onCloseAddThirdLevelItemButton}
                                MenuListProps={{ 'aria-labelledby': 'add-third-level-item-button' }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem disableRipple dialogMenuItem onClick={onCategoryWithSubCategoryItemClick}>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText>Пункт з категоріями</ListItemText>
                                </MenuItem>
                                <MenuItem disableRipple dialogMenuItem onClick={onCategoryWithGoodsItemClick}>
                                    <ListItemIcon>
                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText>Пункт з товарами</ListItemText>
                                </MenuItem>
                                <MenuItem disableRipple dialogMenuItem onClick={onFilterItemClick}>
                                    <ListItemIcon>
                                        <FilterIcon />
                                    </ListItemIcon>
                                    <ListItemText>Пункт з фільтром</ListItemText>
                                </MenuItem>
                            </Menu>
                            <IconButton dialogButton disableRipple editItemButton onClick={onChangeMegaMenuItem(subItem)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton dialogButton disableRipple editItemButton onClick={onDeleteMegaMenuItem(subItem.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Container>
                    </>
                )}
            </Container>
            {subItem?.subItemList.length > 0 && (
                <Container activeCatalogSubSubLevelContainer={subItem.id === activeSubItemId}>
                    <Ul catalogSubSubLevelList>
                        {[...subItem?.subItemList]
                            .sort((el1, el2) => el1.ordering - el2.ordering)
                            .map(subSubItem => (
                                <MegaMenuSubSubItem
                                    key={subSubItem.id}
                                    subSubItem={subSubItem}
                                    activeSubSubItemId={activeSubSubItemId}
                                    setActiveThirdLevelItem={setActiveThirdLevelItem}
                                    onDeleteMegaMenuItem={onDeleteMegaMenuItem}
                                    onChangeMegaMenuItem={onChangeMegaMenuItem}
                                />
                            ))}
                    </Ul>
                    {subItem.id === activeSubItemId && <Container addSubSubItemsButtonContainer></Container>}
                </Container>
            )}
        </Li>
    )
}

export default MegaMenuSubItem
