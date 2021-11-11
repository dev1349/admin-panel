import React from 'react'
import { styled } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

const FilterIconStyled = styled(FilterAltIcon, {
    name: 'FilterIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFilterIcon = props => {
    return <FilterIconStyled {...props} />
}

export default WSFilterIcon
