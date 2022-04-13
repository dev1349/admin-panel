import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useStyle } from '../../../../hooks/useStyle'


const SearchIconWS = props => {
    const SearchIconStyled = useStyle('SearchIconStyled', SearchIcon, null)
    return <SearchIconStyled {...props} />
}

export default SearchIconWS
