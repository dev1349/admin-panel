import React from 'react'
import { styled } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const ClearIconStyled = styled(ClearIcon, {
    name: 'ClearIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSClearIcon = props => {
    return <ClearIconStyled {...props} />
}

export default WSClearIcon
