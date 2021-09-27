import React from 'react'
import AttributeGroup from './AttributeGroup'
import {connect} from 'react-redux'
import {getAllAttributeGroup} from '../../actions/attributeGroupActions'


class AttributeGroupContainer extends React.Component {
    componentDidMount() {
        this.props.getAllAttributeGroup()
    }

    render() {
        return (
            <AttributeGroup
                attributeGroupMode={this.props.attributeGroupMode}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        attributeGroupMode: state.attributeGroup.attributeGroupMode,
    }
}

const mapDispatchToProps = dispatch => ({
    getAllAttributeGroup: () => {
        dispatch(getAllAttributeGroup())
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(AttributeGroupContainer)