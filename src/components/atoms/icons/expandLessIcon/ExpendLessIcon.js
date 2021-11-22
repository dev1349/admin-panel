import React from 'react'
import { styled } from '@mui/material'
import { ExpandLess } from '@mui/icons-material'

const ExpandLessIconStyled = styled(ExpandLess, {
    name: 'ExpandLessIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ExpandLessIconWS = props => {
    return <ExpandLessIconStyled {...props} />
}

export default ExpandLessIconWS
