import React from 'react'
import './ActionAttributeList.sass'

export const ActionAttributeList = props => (
    <div>
        <input
            type="button"
            value="Edit"
            className="blue-bg"
            onClick={() => props.edit()}
        />
    </div>
)
