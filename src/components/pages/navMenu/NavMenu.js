import React from 'react'
import NavList from '../../organisms/navList/NavList'
import { useSelector } from 'react-redux'
import { getNavItems } from '../../../reducers/headerSlice'
import addNavItemIcon from './addNavItemsIcons'
import { useLocation } from 'react-router-dom'

const NavMenu = () => {
    let navItem = useSelector(getNavItems)
    navItem = addNavItemIcon(navItem)

    const location = useLocation()

    return <NavList navItems={navItem} pathname={location.pathname} />
}

export default NavMenu
