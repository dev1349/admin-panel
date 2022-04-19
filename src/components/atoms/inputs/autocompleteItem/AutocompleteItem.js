import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const AutocompleteItem = ({ children, ...rest }) => {
    const AutocompleteItemStyled = useStyle('AutocompleteItemStyle', Box)
    return <AutocompleteItemStyled {...rest}>{children}</AutocompleteItemStyled>
}

export default AutocompleteItem
