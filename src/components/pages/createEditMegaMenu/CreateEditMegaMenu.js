import React, { useEffect, useRef, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import AdminPageHeader from '../../molecules/headers/adminPageHeader/AdminPageHeader'
import AdminPageBorder from '../../atoms/wrappers/adminPageBorder/AdminPageBorder'
import Container from '../../templates/container/Container'
import MenuIcon from '../../atoms/icons/menuIcon/MenuIcon'
import { useResizeDetector } from 'react-resize-detector'
import Ul from '../../atoms/ul/Ul'
import MegaMenuItem from '../../molecules/megaMenuItem/MegaMenuItem'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import MegaMenuSubItem from '../../molecules/megaMenuSubItem/MegaMenuSubItem'
import Menu from '../../atoms/menu/Menu'
import MenuItem from '../../atoms/inputs/menuItem/MenuItem'
import ListItemText from '../../atoms/list/listItemText/ListItemText'
import ListItemIcon from '../../atoms/list/listItemIcon/ListItemIcon'
import CategoryIcon from '../../atoms/icons/categoryIcon/CategoryIcon'
import FilterIcon from '../../atoms/icons/filterIcon/FilterIcon'
import FolderIcon from '../../atoms/icons/folderIcon/FolderIcon'
import TextIcon from '../../atoms/icons/textIcon/TextIcon'
import MegaMenuModalAddNewCategory from '../../organisms/modals/megaMenuModalAddNewCategory/MegaMenuModalAddNewCategory'
import MegaMenuModalAddNewGoodCategory from '../../organisms/modals/megaMenuModalAddNewGoodCategory/MegaMenuModalAddNewGoodCategory'
import MegaMenuModalAddNewFilter from '../../organisms/modals/megaMenuModalAddNewFilter/MegaMenuModalAddNewFilter'
import MegaMenuModalAddNewText from '../../organisms/modals/megaMenuModalAddNewText/MegaMenuModalAddNewText'
import { useDeleteMegaMenuItemMutation, useGetMegaMenuItemsQuery } from '../../../api/megaMenuApi'
import DeleteModal from '../../molecules/modals/deleteModal/DeleteModal'
import ErrorModal from '../../molecules/modals/errorModal/ErrorModal'
import Loader from '../../molecules/loader/Loader'
import MegaMenuModalEditCategory from '../../organisms/modals/megaMenuModalEditCategory/MegaMenuModalEditCategory'
import MegaMenuModalEditGoodCategory from '../../organisms/modals/megaMenuModalEditGoodCategory/MegaMenuModalEditGoodCategory'
import MegaMenuModalEditText from '../../organisms/modals/megaMenuModalEditText/MegaMenuModalEditText'
import MegaMenuModalEditFilter from '../../organisms/modals/megaMenuModalEditFilter/MegaMenuModalEditFilter'
import { decrementMegaMenuColumns, getMegaMenuColumns } from './calcMegaMenuColumns'
import {
    COLUMN_WIDTH,
    SUB_ITEM_HEIGHT,
    SUB_ITEM_PADDING_BOTTOM,
    SUB_ITEMS_PADDING_LEFT,
    SUB_SUB_ITEM_HEIGHT,
} from './megaMenuItemParameters'
import { FACET_QUERY_PARAMETER, GOOD_CATEGORY_URL, SUB_CATEGORY_URL } from './urlPaths'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import { useHistory } from 'react-router-dom'

const CreateEditMegaMenu = () => {
    const { width: catalogFirstLevelContainerWidth, ref: catalogFirstLevelContainerRef } = useResizeDetector()
    const { height: catalogSecondLevelContainerHeight, ref: firstLevelItemsListRef } = useResizeDetector()

    const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth)

    const {
        data: megaMenuItems,
        isLoading: isMegaMenuItemsLoading,
        isFetching: isMegaMenuItemsFetching,
        isError: isMegaMenuItemsError,
    } = useGetMegaMenuItemsQuery('')

    const [hoveredFirstLevelItem, setHoveredFirstLevelItem] = useState(null)

    useEffect(() => {
        if (megaMenuItems === undefined) return
        if (megaMenuItems.length === 0) {
            setHoveredFirstLevelItem(null)
            return
        }
        if (hoveredFirstLevelItem !== null) {
            setHoveredFirstLevelItem(megaMenuItems.find(item => item.id === hoveredFirstLevelItem.id))
            return
        }
        setHoveredFirstLevelItem([...megaMenuItems].sort((el1, el2) => el1.ordering - el2.ordering)[0])
    }, [megaMenuItems, hoveredFirstLevelItem, setHoveredFirstLevelItem])

    const [parentItem, setParentItem] = useState(null)

    const [activeFirstLevelItem, setActiveFirstLevelItem] = useState(null)

    const handleSetActiveItem = item => () => {
        setHoveredFirstLevelItem(item)
        setActiveFirstLevelItem(item)
        setActiveSecondLevelItem(null)
        setActiveThirdLevelItem(null)
    }

    const [activeSecondLevelItem, setActiveSecondLevelItem] = useState(null)

    const handleSetActiveSubItem = subItem => () => {
        setParentItem(subItem)
        setActiveSecondLevelItem(subItem)
        setActiveFirstLevelItem(null)
        setActiveThirdLevelItem(null)
    }

    const [activeThirdLevelItem, setActiveThirdLevelItem] = useState(null)

    const handleSetActiveSubSubItem = subSubItem => () => {
        setActiveThirdLevelItem(subSubItem)
        setActiveFirstLevelItem(null)
        setActiveSecondLevelItem(null)
    }

    const hasSubItems = hoveredFirstLevelItem?.subItemList?.length > 0

    const catalogContainerRef = useRef(null)

    const COLUMN_HEIGHT = catalogSecondLevelContainerHeight ? catalogSecondLevelContainerHeight : 400
    const MEGA_MENU_CONTAINER_RIGHT = catalogContainerRef?.current?.offsetLeft * 2 || 0

    let menuColumns = getMegaMenuColumns(
        hoveredFirstLevelItem,
        SUB_ITEM_HEIGHT,
        SUB_ITEM_PADDING_BOTTOM,
        SUB_SUB_ITEM_HEIGHT,
        COLUMN_HEIGHT
    )

    menuColumns = decrementMegaMenuColumns(
        MEGA_MENU_CONTAINER_RIGHT,
        catalogFirstLevelContainerWidth,
        SUB_ITEMS_PADDING_LEFT,
        menuColumns,
        COLUMN_WIDTH,
        clientWidth
    )

    useEffect(() => {
        const handleResizeWindow = () => {
            setClientWidth(document.documentElement.clientWidth)
        }

        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [])

    const [firstLevelAnchorEl, setFirstLevelAnchorEl] = useState(null)

    const isAddFirstLevelItemMenuOpen = !!firstLevelAnchorEl

    const handleClickAddFirstLevelItemButton = event => {
        setFirstLevelAnchorEl(event.currentTarget)
        setActiveFirstLevelItem(null)
        setActiveSecondLevelItem(null)
        setActiveThirdLevelItem(null)
        setParentItem(null)
    }

    const handleCloseAddFirstLevelItemMenu = () => setFirstLevelAnchorEl(null)

    const [secondLevelAnchorEl, setSecondLevelAnchorEl] = useState(null)

    const isAddSecondLevelItemMenuOpen = !!secondLevelAnchorEl

    const handleClickAddSecondLevelItemButton = hoveredFirstLevelItem => event => {
        setSecondLevelAnchorEl(event.currentTarget)
        setActiveFirstLevelItem(null)
        setActiveSecondLevelItem(null)
        setActiveThirdLevelItem(null)
        setParentItem(hoveredFirstLevelItem)
    }

    const handleCloseAddSecondLevelItemMenu = () => setSecondLevelAnchorEl(null)

    const [thirdLevelAnchorEl, setThirdLevelAnchorEl] = useState(null)

    const handleClickAddThirdLevelItemButton = subItem => event => {
        setThirdLevelAnchorEl(event.currentTarget)
        setParentItem(subItem)
    }

    const handleCloseAddThirdLevelItemMenu = () => setThirdLevelAnchorEl(null)

    const [isMegaMenuModalAddNewCategoryOpen, setMegaMenuModalAddNewCategoryOpen] = useState(false)
    const [isMegaMenuModalAddNewGoodCategoryOpen, setMegaMenuModalAddNewGoodCategoryOpen] = useState(false)
    const [isMegaMenuModalAddNewFilterOpen, setMegaMenuModalAddNewFilterOpen] = useState(false)
    const [isMegaMenuModalAddNewTextOpen, setMegaMenuModalAddNewTextOpen] = useState(false)

    const [isMegaMenuModalEditCategoryOpen, setMegaMenuModalEditCategoryOpen] = useState(false)
    const [isMegaMenuModalEditGoodCategoryOpen, setMegaMenuModalEditGoodCategoryOpen] = useState(false)
    const [isMegaMenuModalEditTextOpen, setMegaMenuModalEditTextOpen] = useState(false)
    const [isMegaMenuModalEditFilterOpen, setMegaMenuModalEditFilterOpen] = useState(false)

    const itemsCount = () => {
        if (megaMenuItems !== undefined && parentItem === null) return megaMenuItems.length
        if (megaMenuItems !== undefined && parentItem !== null) return parentItem.subItemList.length
        return 0
    }

    const handleCategoryWithSubCategoryItemClick = () => {
        setMegaMenuModalAddNewCategoryOpen(true)
        handleCloseAddFirstLevelItemMenu()
        handleCloseAddSecondLevelItemMenu()
        handleCloseAddThirdLevelItemMenu()
    }

    const handleCategoryWithGoodsItemClick = () => {
        setMegaMenuModalAddNewGoodCategoryOpen(true)
        handleCloseAddFirstLevelItemMenu()
        handleCloseAddSecondLevelItemMenu()
        handleCloseAddThirdLevelItemMenu()
    }

    const handleFilterItemClick = () => {
        setMegaMenuModalAddNewFilterOpen(true)
        handleCloseAddFirstLevelItemMenu()
        handleCloseAddSecondLevelItemMenu()
        handleCloseAddThirdLevelItemMenu()
    }

    const handleTextItemClick = () => {
        setMegaMenuModalAddNewTextOpen(true)
        handleCloseAddFirstLevelItemMenu()
        handleCloseAddSecondLevelItemMenu()
        handleCloseAddThirdLevelItemMenu()
    }

    const [deleteMegaMenuItem, { isError: isMegaMenuItemDeleteError, isLoading: isMegaMenuItemDeleteLoading }] =
        useDeleteMegaMenuItemMutation()

    const [megaMenuItemIdForDeleting, setMegaMenuItemIdForDeleting] = useState(null)

    const handleDeleteMegaMenuItem = megaMenuItemId => () => {
        setMegaMenuItemIdForDeleting(megaMenuItemId)
        setDeleteModalOpen(true)
    }

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false)
    }

    const handleYesButtonClick = () => {
        deleteMegaMenuItem(megaMenuItemIdForDeleting)
            .unwrap()
            .then(() => {
                setDeleteModalOpen(false)
                if (megaMenuItemIdForDeleting === hoveredFirstLevelItem.id) {
                    setHoveredFirstLevelItem(null)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [isErrorModalOpen, setErrorModalOpen] = useState(false)

    const handleOpenErrorModal = () => setErrorModalOpen(true)

    const handleCloseErrorModal = () => {
        setErrorModalOpen(false)
    }

    const isLoading = isMegaMenuItemsLoading || isMegaMenuItemsFetching || isMegaMenuItemDeleteLoading

    const isError = isMegaMenuItemsError || isMegaMenuItemDeleteError

    useEffect(() => {
        if (!isError) return
        setErrorModalOpen(true)
    }, [isError])

    const [itemIdForEdition, setItemIdForEdition] = useState(null)

    const handleChangeMegaMenuItem =
        ({ id, url }) =>
        () => {
            setItemIdForEdition(id)
            if (url === null) {
                setMegaMenuModalEditTextOpen(true)
                return
            }
            if (url.match(new RegExp(`${SUB_CATEGORY_URL}/`))) {
                setMegaMenuModalEditCategoryOpen(true)
                return
            }
            if (url.match(new RegExp(`\\?${FACET_QUERY_PARAMETER}=`))) {
                setMegaMenuModalEditFilterOpen(true)
                return
            }
            if (url.match(new RegExp(`${GOOD_CATEGORY_URL}/`))) {
                setMegaMenuModalEditGoodCategoryOpen(true)
                return
            }
        }

    let history = useHistory()

    return (
        <>
            <MaxWidthTemplate>
                <AdminPageHeader
                    icon={<MenuIcon dialogIcon />}
                    title={'Створення/редагування МЕГАМЕНЮ'}
                    buttons={[
                        <IconButton key={0} dialogButton disableRipple onClick={() => history.goBack()}>
                            <UndoIcon />
                        </IconButton>,
                    ]}
                />
                <AdminPageBorder>
                    <Container marginTop7>
                        <Container catalogContainer forwardRef={catalogContainerRef}>
                            <Container megaMenuShadowContainer>
                                <Container catalogItemsContainer forwardRef={catalogFirstLevelContainerRef}>
                                    {megaMenuItems && megaMenuItems.length > 0 && (
                                        <Ul catalogFirstLevelList forwardRef={firstLevelItemsListRef}>
                                            {[...megaMenuItems]
                                                .sort((el1, el2) => el1.ordering - el2.ordering)
                                                .map(firstLevelItem => {
                                                    return (
                                                        <MegaMenuItem
                                                            key={firstLevelItem.id}
                                                            firstLevelItem={firstLevelItem}
                                                            setActiveFirstLevelItem={handleSetActiveItem}
                                                            activeFirstLevelItemId={activeFirstLevelItem?.id}
                                                            hoveredFirstLevelItemId={hoveredFirstLevelItem?.id}
                                                            onDeleteMegaMenuItem={handleDeleteMegaMenuItem}
                                                            onChangeMegaMenuItem={handleChangeMegaMenuItem}
                                                        />
                                                    )
                                                })}
                                        </Ul>
                                    )}
                                    <Container addNewFirstLevelItemButtonContainer onClick={event => event.stopPropagation()}>
                                        <IconButton
                                            dialogButton
                                            disableRipple
                                            onClick={handleClickAddFirstLevelItemButton}
                                            id={'add-first-level-item-button'}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <Menu
                                            id={'add-first-level-mega-menu-item'}
                                            anchorEl={firstLevelAnchorEl}
                                            open={isAddFirstLevelItemMenuOpen}
                                            onClose={handleCloseAddFirstLevelItemMenu}
                                            MenuListProps={{ 'aria-labelledby': 'add-first-level-item-button' }}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <MenuItem disableRipple dialogMenuItem onClick={handleCategoryWithSubCategoryItemClick}>
                                                <ListItemIcon>
                                                    <FolderIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з категоріями</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleCategoryWithGoodsItemClick}>
                                                <ListItemIcon>
                                                    <CategoryIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з товарами</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleFilterItemClick}>
                                                <ListItemIcon>
                                                    <FilterIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з фільтром</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleTextItemClick}>
                                                <ListItemIcon>
                                                    <TextIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт без посилання</ListItemText>
                                            </MenuItem>
                                        </Menu>
                                    </Container>
                                </Container>

                                <Container catalogSubItemsContainer style={{ width: !hasSubItems ? `${COLUMN_WIDTH + 68}px` : 'unset' }}>
                                    {hoveredFirstLevelItem && hasSubItems && (
                                        <Ul catalogSubLevelList style={{ width: `${menuColumns * COLUMN_WIDTH}px`, columns: menuColumns }}>
                                            {[...hoveredFirstLevelItem.subItemList]
                                                .sort((el1, el2) => el1.ordering - el2.ordering)
                                                .map(subLevelItem => (
                                                    <MegaMenuSubItem
                                                        key={subLevelItem.id}
                                                        subItem={subLevelItem}
                                                        activeSubItemId={activeSecondLevelItem?.id}
                                                        setActiveSecondLevelItem={handleSetActiveSubItem}
                                                        activeSubSubItemId={activeThirdLevelItem?.id}
                                                        setActiveThirdLevelItem={handleSetActiveSubSubItem}
                                                        thirdLevelAnchorEl={thirdLevelAnchorEl}
                                                        onClickAddThirdLevelItemButton={handleClickAddThirdLevelItemButton}
                                                        onCloseAddThirdLevelItemButton={handleCloseAddThirdLevelItemMenu}
                                                        onCategoryWithSubCategoryItemClick={handleCategoryWithSubCategoryItemClick}
                                                        onCategoryWithGoodsItemClick={handleCategoryWithGoodsItemClick}
                                                        onFilterItemClick={handleFilterItemClick}
                                                        onDeleteMegaMenuItem={handleDeleteMegaMenuItem}
                                                        onChangeMegaMenuItem={handleChangeMegaMenuItem}
                                                    />
                                                ))}
                                        </Ul>
                                    )}
                                    <Container
                                        addNewSecondLevelItemButtonContainer
                                        addNewSecondLevelItemButtonHideContainer={!hoveredFirstLevelItem}
                                    >
                                        <IconButton
                                            dialogButton
                                            disableRipple
                                            id={'add-second-level-item-button'}
                                            onClick={handleClickAddSecondLevelItemButton(hoveredFirstLevelItem)}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                        <Menu
                                            id={'add-second-level-mega-menu-item'}
                                            anchorEl={secondLevelAnchorEl}
                                            open={isAddSecondLevelItemMenuOpen}
                                            onClose={handleCloseAddSecondLevelItemMenu}
                                            MenuListProps={{ 'aria-labelledby': 'add-second-level-item-button' }}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <MenuItem disableRipple dialogMenuItem onClick={handleCategoryWithSubCategoryItemClick}>
                                                <ListItemIcon>
                                                    <FolderIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з категоріями</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleCategoryWithSubCategoryItemClick}>
                                                <ListItemIcon>
                                                    <CategoryIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з товарами</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleFilterItemClick}>
                                                <ListItemIcon>
                                                    <FilterIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт з фільтром</ListItemText>
                                            </MenuItem>
                                            <MenuItem disableRipple dialogMenuItem onClick={handleTextItemClick}>
                                                <ListItemIcon>
                                                    <TextIcon />
                                                </ListItemIcon>
                                                <ListItemText>Пункт без посилання</ListItemText>
                                            </MenuItem>
                                        </Menu>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </AdminPageBorder>
            </MaxWidthTemplate>
            <MegaMenuModalAddNewCategory
                open={isMegaMenuModalAddNewCategoryOpen}
                onClose={() => setMegaMenuModalAddNewCategoryOpen(false)}
                itemsCount={itemsCount()}
                parentItem={parentItem}
                baseUrl={SUB_CATEGORY_URL}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalAddNewGoodCategory
                open={isMegaMenuModalAddNewGoodCategoryOpen}
                onClose={() => setMegaMenuModalAddNewGoodCategoryOpen(false)}
                itemsCount={itemsCount()}
                parentItem={parentItem}
                baseUrl={GOOD_CATEGORY_URL}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalAddNewFilter
                open={isMegaMenuModalAddNewFilterOpen}
                onClose={() => setMegaMenuModalAddNewFilterOpen(false)}
                itemsCount={itemsCount()}
                parentItem={parentItem}
                baseUrl={GOOD_CATEGORY_URL}
                facetQueryParameter={FACET_QUERY_PARAMETER}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalAddNewText
                open={isMegaMenuModalAddNewTextOpen}
                onClose={() => setMegaMenuModalAddNewTextOpen(false)}
                itemsCount={itemsCount()}
                parentItem={parentItem}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalEditCategory
                open={isMegaMenuModalEditCategoryOpen}
                onClose={() => setMegaMenuModalEditCategoryOpen(false)}
                itemIdForEdition={itemIdForEdition}
                baseUrl={SUB_CATEGORY_URL}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalEditGoodCategory
                open={isMegaMenuModalEditGoodCategoryOpen}
                onClose={() => setMegaMenuModalEditGoodCategoryOpen(false)}
                itemIdForEdition={itemIdForEdition}
                baseUrl={GOOD_CATEGORY_URL}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalEditText
                open={isMegaMenuModalEditTextOpen}
                onClose={() => setMegaMenuModalEditTextOpen(false)}
                itemIdForEdition={itemIdForEdition}
                onOpenErrorModal={handleOpenErrorModal}
            />
            <MegaMenuModalEditFilter
                open={isMegaMenuModalEditFilterOpen}
                onClose={() => setMegaMenuModalEditFilterOpen(false)}
                itemIdForEdition={itemIdForEdition}
                baseUrl={GOOD_CATEGORY_URL}
                facetQueryParameter={FACET_QUERY_PARAMETER}
                onOpenErrorModal={handleOpenErrorModal}
            />
            {isLoading && <Loader dialogProgress />}
            <DeleteModal
                open={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onYes={handleYesButtonClick}
                title={'Підтвердження видалення'}
                description={'Ви дійсно бажаєте видалити цей пункт меню?'}
                yesButtonTitle={'Так'}
                noButtonTitle={'Ні'}
            />
            <ErrorModal
                open={isErrorModalOpen}
                onClose={handleCloseErrorModal}
                title={'Помилка сервера'}
                description={`Виникла помилка під час з'єднання з сервером!`}
                okButtonTitle={'Зрозуміло'}
            />
        </>
    )
}

export default CreateEditMegaMenu
