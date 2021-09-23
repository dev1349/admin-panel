import React from 'react'
import AttributeGroup from './AttributeGroup'
import {connect} from 'react-redux'
import {
    addedAttributeGroup,
    changeAddAttributeGroupFields,
    editAttributeGroup,
    getAllAttributeGroup,
    saveGroup,
    savedEditedAttributeGroup,
    switchMode, addRemoveIdGroupForDeleting,
    removeSelectedAttributesGroup,
    errorInGroupOperation, sortAttributeGroup, addAllGroupForDeleting
} from '../../actions/attributeGroupActions'


class AttributeGroupContainer extends React.Component {
    componentDidMount() {
        this.props.getAllAttributeGroup()
    }

    render() {
        return (
            <AttributeGroup
                attributeGroupItems={this.props.attributeGroupItems}
                addAttributeGroupFields={this.props.addAttributeGroupFields}
                changeAddAttributesGroupFields={this.props.changeAddAttributesGroupFields}
                attributeGroupMode={this.props.attributeGroupMode}
                changeAttributeGroupMode={this.props.changeAttributeGroupMode}
                fetchStatus={this.props.fetchStatus}
                saveCategory={this.props.saveCategory}
                addedAttributeGroup={this.props.addedAttributeGroup}
                editAttributeGroup={this.props.editAttributeGroup}
                savedEditedAttributeGroup={this.props.savedEditedAttributeGroup}
                addRemoveIdGroupForDeleting={this.props.addRemoveIdGroupForDeleting}
                idGroupArrayForDeleting={this.props.idGroupArrayForDeleting}
                removeSelectedAttributesGroup={this.props.removeSelectedAttributesGroup}
                errorInGroupOperation={this.props.errorInGroupOperation}
                sortAttributeGroup={this.props.sortAttributeGroup}
                sortOrderGroupName={this.props.sortOrderGroupName}
                isAllGroupChecked={this.props.isAllGroupChecked}
                checkedAllGroup={this.props.checkedAllGroup}
                isButtonDisabled={this.props.isButtonDisabled}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        attributeGroupItems: state.attributeGroup.attributeGroupItems,
        addAttributeGroupFields: state.attributeGroup.addAttributeGroupFields,
        attributeGroupMode: state.attributeGroup.attributeGroupMode,
        fetchStatus: state.attributeGroup.fetchStatus,
        idGroupArrayForDeleting: state.attributeGroup.forDeleting,
        sortOrderGroupName: state.attributeGroup.sortOrder,
        isAllGroupChecked: (state.attributeGroup.attributeGroupItems.length !== 0) && (state.attributeGroup.attributeGroupItems.length === state.attributeGroup.forDeleting.length),
        isButtonDisabled: state.attributeGroup.fetchStatus !== 'idle'
    }
}

const mapDispatchToProps = dispatch => ({
    getAllAttributeGroup: () => {
        dispatch(getAllAttributeGroup())
    },
    changeAddAttributesGroupFields: (field) => {
        dispatch(changeAddAttributeGroupFields(field))
    },
    changeAttributeGroupMode: (mode) => {
        dispatch(switchMode(mode))
    },
    saveCategory: () => {
        dispatch(saveGroup())
    },
    addedAttributeGroup: () => {
        dispatch(addedAttributeGroup())
    },
    editAttributeGroup: (groupId) => {
        dispatch(editAttributeGroup(groupId))
    },
    savedEditedAttributeGroup: () => {
        dispatch(savedEditedAttributeGroup())
    },
    errorInGroupOperation: () => {
        dispatch(errorInGroupOperation())
    },
    addRemoveIdGroupForDeleting: (id) => {
        dispatch(addRemoveIdGroupForDeleting(id))
    },
    removeSelectedAttributesGroup: () => {
        dispatch(removeSelectedAttributesGroup())
    },
    sortAttributeGroup: () => {
        dispatch(sortAttributeGroup())
    },
    checkedAllGroup: () => {
        dispatch(addAllGroupForDeleting())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(AttributeGroupContainer)