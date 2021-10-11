import React from 'react'
import './SaveAttributeButton.sass'

export const SaveAttributeButton = props => (

    <div>
        <input type="button" value="Save" className="blue-bg" onClick={props.setSubmit}/>
    </div>
    //fix issue on bitbucket
)
