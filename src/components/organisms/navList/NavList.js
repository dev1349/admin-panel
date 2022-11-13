import React, { useState } from 'react'
import NavList from '../../molecules/list/navList/NavList'

const NavListOrganism = ({ navItems, pathname }) => {
    const [openItems, setOpenItems] = useState([])

    const handleOpenCloseItem = id => {
        if (openItems.includes(id)) {
            setOpenItems(prev => prev.filter(itemId => itemId !== id))
        } else {
            setOpenItems(prev => [...prev, id])
        }
    }

    const handleOpenItem = id => setOpenItems(prev => [...prev, id])

    return (
        <NavList
            navItems={navItems}
            open={openItems}
            setOpenItem={handleOpenItem}
            setOpenCloseItem={handleOpenCloseItem}
            pathname={pathname}
        />
    )
}

export default NavListOrganism
