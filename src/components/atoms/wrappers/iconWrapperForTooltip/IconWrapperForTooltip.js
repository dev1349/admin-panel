import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const IconWrapperForTooltipStyled = createStyled('IconWrapperForTooltipStyle', 'div')

const IconWrapperForTooltip = ({ children, forwardedRef, ...rest }) => {
    return (
        <IconWrapperForTooltipStyled {...rest} ref={forwardedRef}>
            {children}
        </IconWrapperForTooltipStyled>
    )
}

export default React.forwardRef((props, ref) => <IconWrapperForTooltip {...props} forwardedRef={ref} />)
