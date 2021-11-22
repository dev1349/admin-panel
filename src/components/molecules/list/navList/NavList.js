import React from 'react'
import List from '../../../atoms/list/list/List'
import ListSubHeader from '../../../atoms/list/listSubHeader/ListSubHeader'
import NavListItem from '../navListItem/NavListItem'
import { Collapse } from '@mui/material'

const NavListWS = ({ navItemsConf, open, setOpen, hideNavMenu, level = 0 }) => {
    return (
        <>
            <List
                component={level === 0 ? 'nav' : 'div'}
                aria-labelledby={level === 0 ? 'navMenu-list' : null}
                subheader={
                    navItemsConf.header ? (
                        <ListSubHeader
                            component="div"
                            id="nested-list-subheader"
                        >
                            {navItemsConf.header}
                        </ListSubHeader>
                    ) : null
                }
            >
                {navItemsConf.items.map(item => (
                    <React.Fragment key={item.id}>
                        <NavListItem
                            {...item}
                            sx={{ pl: level * 3 }}
                            onClick={item.subItems ? setOpen : null}
                            open={open}
                            hideNavMenu={hideNavMenu}
                        />
                        {item.subItems && (
                            <Collapse
                                in={open[item.id]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <NavListWS
                                    navItemsConf={item.subItems}
                                    open={open}
                                    setOpen={setOpen}
                                    hideNavMenu={hideNavMenu}
                                    level={level + 1}
                                />
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </>
    )
}

export default NavListWS
