import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import LoaderWindowTemplateStyle from './LoaderWindowTemplateStyle'


const WSLoader = ({ children, ...rest }) => {
    const LoaderWindowTemplateStyled = useStyle('LoaderWindowTemplateStyled', Box, LoaderWindowTemplateStyle)
    return (
        <LoaderWindowTemplateStyled {...rest}>
            {children}
        </LoaderWindowTemplateStyled>
    )
}

export default WSLoader
