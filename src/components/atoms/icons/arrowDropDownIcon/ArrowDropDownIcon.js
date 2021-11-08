import React from 'react'
import { styled } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const ArrowDropDownIconStyled = styled(ArrowDropDownIcon, {
    name: 'ArrowDropDownIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSArrowDropDownIcon = props => {
    return <ArrowDropDownIconStyled {...props} />
}

export default WSArrowDropDownIcon
