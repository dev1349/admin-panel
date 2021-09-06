import React from 'react'
import HeaderSubMenu from "./HeaderSubMenu";
import icons from './icons.svg'


const HeaderItem = ({id, icon, title, subMenu, isSubMenuActive, setActiveSubMenu}) => {
    const iconsStyle = ['header--icon']
    !title && iconsStyle.push('header--icon__nomargin')
    isSubMenuActive && iconsStyle.push('header--icon__active')

    const itemStyle = ['header--item']
    isSubMenuActive && itemStyle.push('header--item__active')

    const setActiveSubMenuId = () => {
        if (!subMenu || isSubMenuActive) {
            setActiveSubMenu(null)
            return
        }
        setActiveSubMenu(id)
    }

    return (
        <li className={itemStyle.join(' ')} onClick={setActiveSubMenuId}>
            {icon && <svg className={iconsStyle.join(' ')} height="15px" width="15px">
                <use xlinkHref={icons + icon}></use>
            </svg>}

            {title && <div className={'header--description'}>
                {title}
            </div>}

            {subMenu && isSubMenuActive && <HeaderSubMenu
                subMenuItems={subMenu.subMenuItems}
                title={subMenu.title}
            />}
        </li>
    )
}


export default HeaderItem