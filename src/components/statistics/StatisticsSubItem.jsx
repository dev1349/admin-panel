import React from 'react'
import './Statistics.sass'


const StatisticsSubItem = ({item}) => {
    return (
        <div className="statistics_item">
            <span className={`name_title ${item.name_title}`}>
                {item.name_title}
            </span>
            <span className = "statistics_count__container">
                <span className={`${item.countEl} statistics_count`}>
                    {item.countEl}
                </span>
            </span>
        </div>
    )
}


export default StatisticsSubItem