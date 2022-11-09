import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const IframeStyled = createStyled('IframeStyle', 'iframe', ['response'])

const Iframe = props => {
    return <IframeStyled {...props} />
}

export default Iframe
