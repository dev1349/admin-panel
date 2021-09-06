import React from 'react'
import Header from './Header'
import {connect} from "react-redux";
import {setActiveSubMenu} from "../../actions/headerActions";


class HeaderContainer extends React.Component {

    render() {
        const {headerItems, activeSubMenu, setActiveSubMenu} = this.props

        return (
            <Header
                headerItems={headerItems}
                activeSubMenu={activeSubMenu}
                setActiveSubMenu={setActiveSubMenu}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        headerItems: state.header.headerItems,
        activeSubMenu: state.header.activeSubMenu
    }
}

const mapDispatchToProps = dispatch => ({
    setActiveSubMenu: (id) => {
        dispatch(setActiveSubMenu(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)