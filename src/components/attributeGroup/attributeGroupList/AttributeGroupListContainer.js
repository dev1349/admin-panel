import React from 'react'
import AttributeGroupList from './AttributeGroupList'
import {useDispatch, useSelector} from 'react-redux'
import {
    addAllGroupForDeleting,
    addRemoveIdGroupForDeleting,
    editAttributeGroup,
    getAttributeGroupItems,
    getAttributeGroupMode,
    getIdGroupForDeletingArray,
    getSortOrderGroupName,
    isAllGroupChecked,
    isAttributeGroupListEmpty,
    sortAttributeGroup
} from '../../../reducers/attributeGroupSlice'


const AttributeGroupListContainer = () => {
    const attributeGroupMode = useSelector(getAttributeGroupMode)
    const attributeGroupItems = useSelector(getAttributeGroupItems)
    const idGroupArrayForDeleting = useSelector(getIdGroupForDeletingArray)
    const sortOrderGroupName = useSelector(getSortOrderGroupName)
    const isAllGroupsChecked = useSelector(isAllGroupChecked)
    const isGroupListEmpty = useSelector(isAttributeGroupListEmpty)

    const dispatch = useDispatch()
    const editGroup = groupId => {
        dispatch(editAttributeGroup(groupId))
    }
    const addRemoveIdForDeleting = id => {
        dispatch(addRemoveIdGroupForDeleting(id))
    }
    const sortGroup = () => {
        dispatch(sortAttributeGroup())
    }
    const checkedAllGroup = () => {
        dispatch(addAllGroupForDeleting())
    }

    return (
        <AttributeGroupList
            attributeGroupMode={attributeGroupMode}
            attributeGroupItems={attributeGroupItems}
            editAttributeGroup={editGroup}
            addRemoveIdGroupForDeleting={addRemoveIdForDeleting}
            idGroupArrayForDeleting={idGroupArrayForDeleting}
            sortAttributeGroup={sortGroup}
            sortOrderGroupName={sortOrderGroupName}
            isAllGroupChecked={isAllGroupsChecked}
            checkedAllGroup={checkedAllGroup}
            isAttributeGroupListEmpty={isGroupListEmpty}
        />
    )
}


export default AttributeGroupListContainer