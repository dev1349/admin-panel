import React from 'react'
import{ActionAttributeList} from './ActionAttributeList'


const ActionAttributeListContainer = (props) => {
    return(
        <ActionAttributeList edit={props.handleShowEditAttribute}/>
    )
}

export default ActionAttributeListContainer;