import React from 'react'
import {AttributeHeader} from './AttributeHeader'

const AttributeHeaderContainer = (props) => {
    return(
        <div>
            <AttributeHeader
                firstButton={props.firstButton}
                secondButton={props.secondButton}
                showComp={props.showComp}
                title={props.title}
            >
                setSubmit={props.setSubmit}

            </AttributeHeader>
        </div>

    )
}

export default AttributeHeaderContainer;