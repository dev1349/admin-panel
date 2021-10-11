import React from 'react'
import {AddAttributeButton} from './AddAttributeButton'

const AddAttributesContainer = (props) => {
    return(
        <AddAttributeButton showAddAttribute={props.handleShowAddAttribute}/>
    )
}

export default AddAttributesContainer;