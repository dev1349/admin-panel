import React from 'react'
import './Header.sass'
import HeaderItem from "./HeaderItem";
import StatisticsContainer from "../statistics/StatisticsContainer";

const Header = ({headerItems, activeSubMenu, setActiveSubMenu, isStatisticActive, setActiveStatistics, titleItem}) => {

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


            <StatisticsContainer
                key={10000}
                id={10000}
                isSubMenuActive={activeSubMenu === 10000}
                setActiveSubMenu={setActiveSubMenu}
                
            />

        </ul>

    )
}


export default Header