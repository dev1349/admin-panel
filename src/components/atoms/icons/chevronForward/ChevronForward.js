import React from 'react'
import chevronForward from './chevron_forward.svg'
import { createStyled } from '../../../../services/style/createStyled'

const ChevronForwardStyled = createStyled('ChevronForwardStyle', 'svg', ['light', 'catalogItem'])

const ChevronForward = props => {
    return (
        <ChevronForwardStyled {...props} viewBox="0 0 10 16">
            <use xlinkHref={`${chevronForward}#icon-chevron_forward`} />
        </ChevronForwardStyled>
    )
}

export default ChevronForward
