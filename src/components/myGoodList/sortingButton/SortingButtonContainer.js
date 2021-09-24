import React from 'react'
import SortingButton from './SortingButton'
import {connect} from 'react-redux'
import {changeMyGoodListSortingStatus} from '../../../actions/goodActions'


class SortingButtonContainer extends React.Component {
    render() {
        return (
            <SortingButton
                title={this.props.title}
                name={this.props.name}
                sortingStatus={this.props.sortingStatus}
                changeMyGoodListSortingStatus={this.props.changeMyGoodListSortingStatus}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        sortingStatus: state.good.sortingStatus,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMyGoodListSortingStatus: (nameOfField) => {
            dispatch(changeMyGoodListSortingStatus(nameOfField))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingButtonContainer)