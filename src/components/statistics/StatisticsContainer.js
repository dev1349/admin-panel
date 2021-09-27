import React from 'react'
import {Statistics} from './Statistics'
import {connect} from "react-redux";
import './Statistics.sass'

class StatisticsContainer extends React.Component {


    render() {
        console.log(this.props.icon)
        return(
            <Statistics
                id={this.props.id}
                statisticsItems={this.props.statisticsItems}
                titleItem={this.props.titleItem}
                isSubMenuActive={this.props.isSubMenuActive}
                setActiveSubMenu={this.props.setActiveSubMenu}
                icon = {this.props.icon}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        statisticsItems: state.statistics.statisticsItems,
        titleItem: state.statistics.statisticsItems.map((el) => el.titleItem)
    }
}

export default connect(mapStateToProps)(StatisticsContainer)
