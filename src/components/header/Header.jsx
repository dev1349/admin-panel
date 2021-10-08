import React from 'react'
import './Header.sass'
import HeaderItem from './HeaderItem'
import StatisticsContainer from '../statistics/StatisticsContainer'

const Header = ({headerItems, activeSubMenu, setActiveSubMenu, statisticsId}) => {

    const setActiveSubMenuId = () => {
        setActiveSubMenu(null)
    }

    return (

        <ul className="header">
            {activeSubMenu && <div className="header--overlay" onClick={setActiveSubMenuId}/>}

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
                isSubMenuActive={activeSubMenu === statisticsId}
                setActiveSubMenu={setActiveSubMenu}
                statisticsId={statisticsId}
            />

        </ul>

    )
}


export default Header