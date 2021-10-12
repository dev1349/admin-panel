import React from 'react'
import './BackAttributeButton.sass'

export const BackAttributeButton = props => (
    <div>
        <input
            type="button"
            value="Back"
            className="grey-bg"
            onClick={props.showList}
        />
    </div>
)
