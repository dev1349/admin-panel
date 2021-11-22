import React, { useState } from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import MenuIcon from '../../atoms/icons/menuIcon/MenuIcon'
import Img from '../../atoms/img/Img'
import PageHeaderTemplate from '../../templates/pageHeaderTemplate/PageHeaderTemplate'
import ImportExportIcon from '../../atoms/icons/importExportIcon/ImportExportIcon'
import MenuButton from '../../molecules/buttons/menuButton/MenuButton'
import ShopsIcon from '../../atoms/icons/shopsIcon/ShopsIcon'
import HelpIcon from '../../atoms/icons/helpIcon/HelpIcon'
import LogoutIcon from '../../atoms/icons/logoutIcon/LogoutIcon'
import PageHeaderItemRightTemplate from '../../templates/pageHeaderItemRightTemplate/PageHeaderItemRightTemplate'
import Link from '../../atoms/link/Link'
import Drawer from '../../atoms/drawer/Drawer'
import NavMenu from '../../pages/navMenu/NavMenu'

const PageHeader = ({
    onClickMenu,
    logo,
    importExportProps,
    shopsProps,
    helpProps,
    onClickLogout,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isMenuOpen, setMenuOpenStatus] = useState(false)
    const handleClick = evt => {
        if (evt.currentTarget === anchorEl) {
            setAnchorEl(null)
            return
        }
        setAnchorEl(evt.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleMenuButtonClick = () => {
        setAnchorEl(null)
        setMenuOpenStatus(true)
        onClickMenu && onClickMenu()
    }
    const handleLogoutButtonClick = () => {
        setAnchorEl(null)
        onClickLogout && onClickLogout()
    }
    const hideDrawer = event => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setMenuOpenStatus(false)
    }

    return (
        <PageHeaderTemplate>
            <IconButton onClick={handleMenuButtonClick} menuButton>
                <MenuIcon />
            </IconButton>
            <Link href={logo.link}>
                <Img path={logo.imgSrc} altText={logo.altTextImg} logo />
            </Link>
            <PageHeaderItemRightTemplate>
                <MenuButton
                    id={importExportProps.id}
                    anchorEl={anchorEl}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    menuItems={importExportProps.menuItems}
                >
                    <ImportExportIcon />
                </MenuButton>
            </PageHeaderItemRightTemplate>
            <MenuButton
                id={shopsProps.id}
                anchorEl={anchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                menuItems={shopsProps.menuItems}
            >
                <ShopsIcon />
            </MenuButton>
            <MenuButton
                id={helpProps.id}
                anchorEl={anchorEl}
                handleClick={handleClick}
                handleClose={handleClose}
                menuItems={helpProps.menuItems}
            >
                <HelpIcon />
            </MenuButton>
            <IconButton onClick={handleLogoutButtonClick} menuButton>
                <LogoutIcon />
            </IconButton>
            <Drawer anchor={'left'} open={isMenuOpen} onClose={hideDrawer}>
                <NavMenu hideNavMenu={hideDrawer} />
            </Drawer>
        </PageHeaderTemplate>
    )
}

export default PageHeader
