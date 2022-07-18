import React from 'react'
import { Box } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const LoaderWindowTemplateStyled = createStyled('LoaderWindowTemplateStyle', Box)

const WSLoader = ({ children, ...rest }) => {
    return <LoaderWindowTemplateStyled {...rest}>{children}</LoaderWindowTemplateStyled>
}

export default WSLoader
