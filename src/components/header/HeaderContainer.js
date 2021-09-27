import React from 'react'
import Header from './Header'
import {connect} from "react-redux";
import {setActiveSubMenu} from "../../actions/headerActions";
import {setActiveStatistics} from "../../actions/StatisticsActions";


class HeaderContainer extends React.Component {

    render() {
        const {headerItems, activeSubMenu, setActiveSubMenu,isStaticActive,setActiveStatistics, titleItem} = this.props
        return (
            <Header
                headerItems={headerItems}
                activeSubMenu={activeSubMenu}
                setActiveSubMenu={setActiveSubMenu}
                isStatisticActive = {isStaticActive}
                setActiveStatistics = {setActiveStatistics}
                titleItem = {titleItem}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        headerItems: state.header.headerItems,
        activeSubMenu: state.header.activeSubMenu,
        isStaticActive: state.statistics.isActive,
        titleItem: state.statistics.statisticsItems.map((el) => el.titleItem)
    }
}

const mapDispatchToProps = dispatch => ({
    setActiveSubMenu: (id) => {
        dispatch(setActiveSubMenu(id))
    },
    setActiveStatistics: (id) => {
        dispatch(setActiveStatistics(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)