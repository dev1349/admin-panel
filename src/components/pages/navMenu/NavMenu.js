import React from 'react'
import NavTemplate from '../../templates/navTemplate/NavTemplate'
import NavList from '../../organisms/navList/NavList'
import { useSelector } from 'react-redux'
import { getNavItemsConf } from '../../../reducers/headerSlice'
import addNavItemsIcons from './addNavItemsIcons'

const NavMenu = ({ hideNavMenu }) => {
    let navItemConf = useSelector(getNavItemsConf)
    navItemConf = addNavItemsIcons(navItemConf)

    return (
        <NavTemplate>
            <NavList navItemsConf={navItemConf} hideNavMenu={hideNavMenu} />
        </NavTemplate>
    )
}

export default NavMenu
