import React from 'react'
import { styled } from '@mui/material'
import HideImageIcon from '@mui/icons-material/HideImage'

const HideImageIconStyled = styled(HideImageIcon, {
    name: 'HideImageIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSHideImageIcon = props => {
    return <HideImageIconStyled {...props} />
}

export default WSHideImageIcon
