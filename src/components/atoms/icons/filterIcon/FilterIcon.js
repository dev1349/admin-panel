import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useStyle } from '../../../../hooks/useStyle'


const WSFilterIcon = props => {
    const FilterIconStyled = useStyle('FilterIconStyle', FilterAltIcon)
    return <FilterIconStyled {...props} />
}

export default WSFilterIcon
