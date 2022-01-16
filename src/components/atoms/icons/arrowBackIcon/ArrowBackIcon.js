import React from 'react'
import { styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ArrowBackIconStyled = styled(ArrowBackIcon, {
    name: 'ArrowBackIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ArrowBackIconWS = props => {
    return <ArrowBackIconStyled {...props} />
}

export default ArrowBackIconWS
