import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const AutocompleteItem = ({ children, ...rest }) => {
    const AutocompleteItemStyled = useStyle('AutocompleteItemStyled', Box, null)
    return <AutocompleteItemStyled {...rest}>{children}</AutocompleteItemStyled>
}

export default AutocompleteItem
