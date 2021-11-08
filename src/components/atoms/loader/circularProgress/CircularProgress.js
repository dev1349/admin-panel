import React from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress } from '@mui/material'

const CircularProgressStyled = styled(CircularProgress, {
    name: 'CircularProgressStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSCircularProgress = props => {
    return <CircularProgressStyled {...props} />
}

export default WSCircularProgress
