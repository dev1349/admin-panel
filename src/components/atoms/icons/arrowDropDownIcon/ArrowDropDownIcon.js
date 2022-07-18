import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { createStyled } from '../../../../services/style/createStyled'

const ArrowDropDownIconStyled = createStyled('ArrowDropDownIconStyle', ArrowDropDownIcon)

const WSArrowDropDownIcon = props => {
    return <ArrowDropDownIconStyled {...props} />
}

export default WSArrowDropDownIcon
