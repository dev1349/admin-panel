import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { createStyled } from '../../../../services/style/createStyled'

const FilterIconStyled = createStyled('FilterIconStyle', FilterAltIcon, ['dialogIcon'])

const WSFilterIcon = props => {
    return <FilterIconStyled {...props} />
}

export default WSFilterIcon
