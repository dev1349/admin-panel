import React from 'react'
import './DeleteAttributeButton.sass'


export const DeleteAttributeButton = props => (
    <div>
        <input type="button" value="Delete" className="red-bg" onClick={props.handleDelete}/>
    </div>
)
