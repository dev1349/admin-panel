import React from 'react'
import './AddAttributeButton.sass'


export const AddAttributeButton = props => (
    <div>
        <input type="button" value="add" className="blue-bg" onClick={props.showAddAttribute}/>
    </div>
)
