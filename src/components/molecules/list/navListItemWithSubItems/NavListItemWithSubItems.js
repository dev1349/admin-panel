import React, { useEffect } from 'react'
import NavListItem from '../navListItem/NavListItem'
import { Collapse } from '@mui/material'
import NavListMolecule from '../navList/NavList'

const getNestedRouts = subItems => {
    const nestedRoutes = []

    const getSubItemsRouts = subItems => {
        subItems.forEach(subItem => {
            if (subItem.link) {
                nestedRoutes.push(subItem.link)
            }
            if (subItem.subItems) {
                getSubItemsRouts(subItem.subItems)
            }
        })
    }
    getSubItemsRouts(subItems)
    return nestedRoutes
}

const NavListItemWithSubItems = ({ item, level, open, setOpenItem, setOpenCloseItem, pathname }) => {
    useEffect(() => {
        if (!item.subItems) return

        const nestedRouts = getNestedRouts(item.subItems)
        if (nestedRouts.includes(pathname)) {
            setOpenItem(item.id)
        }
    }, [item, pathname])

    return (
        <>
            <NavListItem
                {...item}
                sx={{ marginLeft: `${level ? level * 32 : 0}px` }}
                onClick={setOpenCloseItem}
                open={open}
                pathname={pathname}
            />
            {item.subItems && (
                <Collapse in={open.includes(item.id)} timeout="auto" unmountOnExit>
                    <NavListMolecule
                        navItems={item.subItems}
                        open={open}
                        setOpenItem={setOpenItem}
                        setOpenCloseItem={setOpenCloseItem}
                        level={level + 1}
                        pathname={pathname}
                    />
                </Collapse>
            )}
        </>
    )
}

export default NavListItemWithSubItems
