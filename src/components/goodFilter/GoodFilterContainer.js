import React from 'react'
import {connect} from 'react-redux'
import GoodFilter from "./GoodFilter";
import {changeGoodFilter, filteringGood} from "../../actions/goodActions";


class GoodFilterContainer extends React.Component {

    render() {
        const {goodStatus, goodImageStatus, goodTypes, filter, changeGoodFilter, filteringGood} = this.props

        return (
            <GoodFilter
                goodStatus={goodStatus}
                goodImageStatus={goodImageStatus}
                goodTypes={goodTypes}
                filter={filter}
                changeGoodFilter={changeGoodFilter}
                filteringGood={filteringGood}
            />
        )
    }
}


const getGoodStatus = state => Array.from(new Set(state.good.allGood.map(el => el.status)).values())
const getImageStatus = state => Array.from(new Set(state.good.allGood.map(el => el.imageStatus)).values())
const getGoodTypes = state => Array.from(new Set(state.good.allGood.map(el => el.goodType.name)).values())
const getFilter = state => state.good.filter


const mapStateToProps = state => {
    return {
        goodStatus: getGoodStatus(state),
        goodImageStatus: getImageStatus(state),
        goodTypes: getGoodTypes(state),
        filter: getFilter(state),
    }
}

const mapDispatchToProps = dispatch => ({
    changeGoodFilter: (key, value) => {
        dispatch(changeGoodFilter(key, value))
    },
    filteringGood: () => {
        dispatch(filteringGood())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(GoodFilterContainer)