import React from 'react'
import { styled } from '@mui/material'

const StatisticsItemTemplateStyled = styled('div', {
    name: 'StatisticsItemTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const StatisticsItemTemplate = ({ children }) => {
    return (
        <StatisticsItemTemplateStyled>{children}</StatisticsItemTemplateStyled>
    )
}

export default StatisticsItemTemplate
