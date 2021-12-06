import React from 'react'
import { styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchIconStyled = styled(SearchIcon, {
    name: 'SearchIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SearchIconWS = props => {
    return <SearchIconStyled {...props} />
}

export default SearchIconWS
