import React from 'react'
import {connect} from 'react-redux'
import {postGood} from '../../actions/goodActions'
import {AddGood} from './AddGood'
import {getAllGoodType} from '../../actions/goodTypeActions'


class AddGoodContainer extends React.Component {
    componentDidMount() {
        this.props.getAllGoodType()
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleChangeSelect = (event) => {
        this.setState({
            ...this.state,
            goodType: this.props.allGoodType[event.target.value]
        })
    }

    handleSubmit = () => {
        this.props.addGood(this.state)
    }

    render() {
        return (
            this.props.allGoodType ?
                <AddGood allGoodType={this.props.allGoodType}
                         handleChange={this.handleChange}
                         handleChangeSelect={this.handleChangeSelect}
                         handleSubmit={this.handleSubmit}/>
                : <div/>
        )
    }
}

const mapStateToProps = state => {
    return {allGoodType: state.goodType.allGoodType}
}

const mapDispatchToProps = dispatch => ({
    getAllGoodType: () => {
        dispatch(getAllGoodType())
    },
    addGood: (good) => {
        good && dispatch(postGood(good))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddGoodContainer)