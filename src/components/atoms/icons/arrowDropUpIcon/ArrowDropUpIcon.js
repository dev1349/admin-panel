import React from 'react'
import { styled } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

const ArrowDropUpIconStyled = styled(ArrowDropUpIcon, {
    name: 'ArrowDropUpIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSArrowDropUpIcon = props => {
    return <ArrowDropUpIconStyled {...props} />
}

export default WSArrowDropUpIcon
