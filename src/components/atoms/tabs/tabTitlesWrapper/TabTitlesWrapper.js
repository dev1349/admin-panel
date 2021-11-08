import React from 'react'
import { styled } from '@mui/material'

const TabTitlesWrapperStyled = styled('div', {
    name: 'TabTitlesWrapperStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTabsTitleWrapper = ({ children }) => {
    return <TabTitlesWrapperStyled>{children}</TabTitlesWrapperStyled>
}

export default WSTabsTitleWrapper
