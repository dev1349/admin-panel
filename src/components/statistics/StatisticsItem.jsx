import React from 'react'
import './Statistics.sass'
import StatisticsSubItem from './StatisticsSubItem'

const StatisticsItem = props => {
    return (
        <div className={`statistics_item__title ${props.title} ${props.id}`}>
            <div className="statistics__main_title">{props.title}</div>
            {props.titleItem.map((item, index, icon) => {
                return <StatisticsSubItem key={index} item={item} icon={icon} />
            })}
        </div>
    )
}

export default StatisticsItem
