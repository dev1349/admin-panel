import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { createStyled } from '../../../../services/style/createStyled'

const SearchIconStyled = createStyled('SearchIconStyle', SearchIcon)

const SearchIconWS = props => {
    return <SearchIconStyled {...props} />
}

export default SearchIconWS
