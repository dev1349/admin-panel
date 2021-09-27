import React from 'react'
import {connect} from 'react-redux'
import AttributeGroupList from './AttributeGroupList'
import {
    addAllGroupForDeleting,
    addRemoveIdGroupForDeleting,
    editAttributeGroup,
    sortAttributeGroup
} from '../../../actions/attributeGroupActions'


class AttributeGroupListContainer extends React.Component {
    render () {
        return (
            <AttributeGroupList
                attributeGroupMode={this.props.attributeGroupMode}
                attributeGroupItems={this.props.attributeGroupItems}
                editAttributeGroup={this.props.editAttributeGroup}
                addRemoveIdGroupForDeleting={this.props.addRemoveIdGroupForDeleting}
                idGroupArrayForDeleting={this.props.idGroupArrayForDeleting}
                sortAttributeGroup={this.props.sortAttributeGroup}
                sortOrderGroupName={this.props.sortOrderGroupName}
                isAllGroupChecked={this.props.isAllGroupChecked}
                checkedAllGroup={this.props.checkedAllGroup}
                isAttributeGroupListEmpty={this.props.isAttributeGroupListEmpty}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        attributeGroupMode: state.attributeGroup.attributeGroupMode,
        attributeGroupItems: state.attributeGroup.attributeGroupItems,
        idGroupArrayForDeleting: state.attributeGroup.forDeleting,
        sortOrderGroupName: state.attributeGroup.sortOrder,
        isAllGroupChecked: (state.attributeGroup.attributeGroupItems.length !== 0) && (state.attributeGroup.attributeGroupItems.length === state.attributeGroup.forDeleting.length),
        isAttributeGroupListEmpty: !state.attributeGroup.attributeGroupItems.length
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editAttributeGroup: (groupId) => {
            dispatch(editAttributeGroup(groupId))
        },
        addRemoveIdGroupForDeleting: (id) => {
            dispatch(addRemoveIdGroupForDeleting(id))
        },
        sortAttributeGroup: () => {
            dispatch(sortAttributeGroup())
        },
        checkedAllGroup: () => {
            dispatch(addAllGroupForDeleting())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributeGroupListContainer)