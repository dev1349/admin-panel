import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

const LoaderWindowTemplateStyled = styled(Box, {
    name: 'LoaderWindowTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLoader = ({ children, ...rest }) => {
    return (
        <LoaderWindowTemplateStyled {...rest}>
            {children}
        </LoaderWindowTemplateStyled>
    )
}

export default WSLoader
