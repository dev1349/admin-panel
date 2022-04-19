import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const WSLoader = ({ children, ...rest }) => {
    const LoaderWindowTemplateStyled = useStyle('LoaderWindowTemplateStyle', Box)
    return (
        <LoaderWindowTemplateStyled {...rest}>
            {children}
        </LoaderWindowTemplateStyled>
    )
}

export default WSLoader
