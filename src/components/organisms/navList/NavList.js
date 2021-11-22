import React, { useState } from 'react'
import NavList from '../../molecules/list/navList/NavList'

const NavListWS = ({ navItemsConf, hideNavMenu }) => {
    const [open, setOpen] = useState({})
    const handleOpenClose = id => {
        if (open[id]) {
            Object.keys(open).forEach(key => {
                if (key.startsWith(id)) {
                    delete open[key]
                    setOpen({ ...open })
                }
            })
        } else {
            setOpen({ ...open, [id]: true })
        }
    }

    return (
        <NavList
            navItemsConf={navItemsConf}
            open={open}
            setOpen={handleOpenClose}
            hideNavMenu={hideNavMenu}
        />
    )
}

export default NavListWS
