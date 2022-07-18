import React from 'react'
import { styled, tooltipClasses } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

const TooltipStyled = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#525050',
        color: '#FFF',
        fontSize: '14px',
        padding: '10px 15px',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#525050',
    },
}))

const TooltipAtom = ({ children, ...rest }) => {
    return <TooltipStyled {...rest}>{children}</TooltipStyled>
}

export default TooltipAtom
