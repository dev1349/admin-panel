import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useStyle } from '../../../../hooks/useStyle'


const SearchIconWS = props => {
    const SearchIconStyled = useStyle('SearchIconStyle', SearchIcon)
    return <SearchIconStyled {...props} />
}

export default SearchIconWS
