import React from 'react'
import StatisticsCount from '../../../atoms/textElements/statisticsCount/StatisticsCount'
import StatisticsText from '../../../atoms/textElements/statisticsText/StatisticsText'
import StatisticsItemTemplate from '../../../templates/statisticsItemTemplate/StatisticsItemTemplate'

const StatisticsMenuItem = ({ itemText, itemCount }) => {
    return (
        <StatisticsItemTemplate>
            <StatisticsText>{itemText}</StatisticsText>
            <StatisticsCount attention={itemCount > 0}>
                {itemCount}
            </StatisticsCount>
        </StatisticsItemTemplate>
    )
}

export default StatisticsMenuItem
