import React from 'react'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'

export const TooltipStyled = styled(Tooltip, {
    name: 'TooltipStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TooltipWS = ({ children, ...rest }) => {
    return <TooltipStyled {...rest}>{children}</TooltipStyled>
}

export default TooltipWS
