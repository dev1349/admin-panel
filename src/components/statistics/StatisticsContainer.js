import React from 'react'
import { Statistics } from './Statistics'
import { useSelector } from 'react-redux'
import './Statistics.sass'

const StatisticsContainer = ({
    statisticsId,
    isSubMenuActive,
    setActiveSubMenu,
}) => {
    const statisticsItems = useSelector(
        state => state.statistics.statisticsItems
    )
    const titleItem = useSelector(state =>
        state.statistics.statisticsItems.map(el => el.titleItem)
    )

    return (
        <Statistics
            statisticsId={statisticsId}
            statisticsItems={statisticsItems}
            titleItem={titleItem}
            isSubMenuActive={isSubMenuActive}
            setActiveSubMenu={setActiveSubMenu}
        />
    )
}

export default StatisticsContainer
