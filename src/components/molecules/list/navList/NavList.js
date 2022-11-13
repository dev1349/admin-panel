import React from 'react'
import List from '../../../atoms/list/list/List'
import ListSubHeader from '../../../atoms/list/listSubHeader/ListSubHeader'
import NavListItemWithSubItems from '../navListItemWithSubItems/NavListItemWithSubItems'

const NavListMolecule = ({ navItems, open, setOpenItem, setOpenCloseItem, pathname, level = 0 }) => {
    return (
        <List
            component={level === 0 ? 'nav' : 'div'}
            aria-labelledby={level === 0 ? 'navMenu-list' : null}
            subheader={
                navItems.header ? (
                    <ListSubHeader component="div" id="nested-list-subheader">
                        {navItems.header}
                    </ListSubHeader>
                ) : null
            }
        >
            {navItems.map(item => (
                <NavListItemWithSubItems
                    key={item.id}
                    item={item}
                    open={open}
                    setOpenItem={setOpenItem}
                    setOpenCloseItem={setOpenCloseItem}
                    pathname={pathname}
                    level={level}
                />
            ))}
        </List>
    )
}

export default NavListMolecule
