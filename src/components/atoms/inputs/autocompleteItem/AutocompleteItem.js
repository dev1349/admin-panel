import React from 'react'
import { Box } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const AutocompleteItemStyled = createStyled('AutocompleteItemStyle', Box)

const AutocompleteItem = ({ children, ...rest }) => {
    return <AutocompleteItemStyled {...rest}>{children}</AutocompleteItemStyled>
}

export default AutocompleteItem
