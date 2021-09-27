import React from 'react'
import Modals from './Modals'
import {connect} from 'react-redux'
import {
    addedAttributeGroup,
    deletedAttributeGroup,
    errorInGroupOperation,
    savedEditedAttributeGroup
} from '../../../actions/attributeGroupActions'


class ModalsContainer extends React.Component {
    render () {
        return (
            <Modals
                fetchStatus={this.props.fetchStatus}
                addedAttributeGroup={this.props.addedAttributeGroup}
                errorInGroupOperation={this.props.errorInGroupOperation}
                savedEditedAttributeGroup={this.props.savedEditedAttributeGroup}
                deletedAttributeGroup={this.props.deletedAttributeGroup}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        fetchStatus: state.attributeGroup.fetchStatus,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addedAttributeGroup: () => {
            dispatch(addedAttributeGroup())
        },
        errorInGroupOperation: () => {
            dispatch(errorInGroupOperation())
        },
        savedEditedAttributeGroup: () => {
            dispatch(savedEditedAttributeGroup())
        },
        deletedAttributeGroup: () => {
            dispatch(deletedAttributeGroup())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalsContainer)