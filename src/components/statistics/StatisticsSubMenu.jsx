import React from 'react'
import StatisticsItem from './StatisticsItem'



const StatisticsSubMenu = ({statisticsItems}) => {

    return (
        <div className="statistics_content header--subMenu">
            {statisticsItems.map((el, index) => {

                return <StatisticsItem
                    key={index}
                    title={el.main_title}
                    titleItem={el.titleItem}
                    formulaEL={el.titleItem.map(el => el.countEl)}
                    icon = {el.icon}
                />
            })}
        </div>
    )
}


export default StatisticsSubMenu