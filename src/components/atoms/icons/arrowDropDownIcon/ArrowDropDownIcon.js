import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useStyle } from '../../../../hooks/useStyle'


const WSArrowDropDownIcon = props => {
    const ArrowDropDownIconStyled = useStyle('ArrowDropDownIconStyled', ArrowDropDownIcon, null)
    return <ArrowDropDownIconStyled {...props} />
}

export default WSArrowDropDownIcon
