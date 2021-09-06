import React from 'react'
import './Header.sass'
import HeaderItem from "./HeaderItem";


const Header = ({headerItems, activeSubMenu, setActiveSubMenu}) => {

    const setActiveSubMenuId = () => {
        setActiveSubMenu(null)
    }

    return (
        <ul className="header">
            {activeSubMenu && <div className="header--overlay" onClick={setActiveSubMenuId}></div>}

            {headerItems.map(({id, title, icon, subMenu}) => {
                return (
                    <HeaderItem
                        key={id}
                        id={id}
                        title={title}
                        icon={icon}
                        subMenu={subMenu}
                        isSubMenuActive={activeSubMenu === id}
                        setActiveSubMenu={setActiveSubMenu}
                    />
                )
            })}

        </ul>
    )
}


export default Header