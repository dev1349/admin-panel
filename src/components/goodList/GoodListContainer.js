import React from 'react'
import {connect} from 'react-redux'
import {GoodList} from './GoodList'
import {deleteGood, getAllGood} from '../../actions/goodActions'


class GoodListContainer extends React.Component {
    componentDidMount() {
        this.props.getAllGood()
    }

    handleDelete = good => {
        this.props.deleteGood(good)
    }

    render() {
        return (
            <div>
                {this.props.allGood &&
                <GoodList allGood={this.props.allGood}
                          handleDelete={this.handleDelete}/>}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {allGood: state.good.allGood}
}

const mapDispatchToProps = dispatch => ({
    getAllGood: () => {
        dispatch(getAllGood())
    },
    deleteGood: (good) => {
        good && dispatch(deleteGood(good))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GoodListContainer)