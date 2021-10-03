import React from 'react'
import Header from './Header'
import {connect} from "react-redux";
import {setActiveSubMenu} from "../../actions/headerActions";


class HeaderContainer extends React.Component {

    render() {
        const {headerItems, activeSubMenu, setActiveSubMenu, statisticsId} = this.props
        return (
            <Header
                headerItems={headerItems}
                activeSubMenu={activeSubMenu}
                setActiveSubMenu={setActiveSubMenu}
                statisticsId={statisticsId}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        headerItems: state.header.headerItems,
        activeSubMenu: state.header.activeSubMenu,
        statisticsId: state.statistics.id,
    }
}

export default connect(mapStateToProps, {setActiveSubMenu})(HeaderContainer)