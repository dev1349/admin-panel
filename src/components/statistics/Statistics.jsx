import React from 'react'
import './Statistics.sass'
import StatisticsSubMenu from './StatisticsSubMenu'
import icons from "../header/icons.svg";


export const Statistics = ({
                               statisticsId,
                               statisticsItems,
                               titleItem,
                               isSubMenuActive,
                               setActiveSubMenu
                           }) => {

    const styles = ['statistic_container', 'header--item']
    if (isSubMenuActive) {
        styles.push('header--item__active')
    }

    const setActiveSubMenuId = () => {
        if (isSubMenuActive) {
            setActiveSubMenu(null)
            return
        }
        setActiveSubMenu(statisticsId)
    }

    return (
        <li className={styles.join(' ')} onClick={setActiveSubMenuId}>
            <div
                onClick={() => {
                    setActiveSubMenu(statisticsId)
                }}
                className="statistics_button">
                <svg height={"15px"} width={"15px"}>
                    <use xlinkHref = {icons + "#statistic"}></use>
                </svg> <div className ="clientActive">{titleItem[3].reduce((sum, el) => sum + el.countEl, 0)}</div>
            </div>

            {isSubMenuActive && <StatisticsSubMenu
                statisticsItems={statisticsItems}
            />}
        </li>
    )
}