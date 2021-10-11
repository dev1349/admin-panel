import React from 'react'
import {SaveAttributeButton} from './SaveAttributeButton'

const SaveAttributeButtonContainer = (props) => {
    return(
        <SaveAttributeButton setSubmit={props.setSubmit} showList={props.showList}/>
    )
}

export default SaveAttributeButtonContainer;