import React from 'react'
import { Box, styled } from '@mui/material'

const AutocompleteItemStyled = styled(Box, {
    name: 'AutocompleteItemStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AutocompleteItem = ({ children, ...rest }) => {
    return <AutocompleteItemStyled {...rest}>{children}</AutocompleteItemStyled>
}

export default AutocompleteItem
