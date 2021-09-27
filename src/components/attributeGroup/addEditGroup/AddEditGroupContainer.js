import React from 'react'
import {connect} from 'react-redux'
import AddEditGroup from './AddEditGroup'
import {changeAddAttributeGroupFields} from '../../../actions/attributeGroupActions'


class AddEditGroupContainer extends React.Component {
    render () {
        return (
            <AddEditGroup
                addAttributeGroupFields={this.props.addAttributeGroupFields}
                attributeGroupMode={this.props.attributeGroupMode}
                changeAddAttributesGroupFields={this.props.changeAddAttributesGroupFields}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        addAttributeGroupFields: state.attributeGroup.addAttributeGroupFields,
        attributeGroupMode: state.attributeGroup.attributeGroupMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAddAttributesGroupFields: (field) => {
            dispatch(changeAddAttributeGroupFields(field))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditGroupContainer)