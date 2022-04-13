import React from 'react'
import { CircularProgress } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSCircularProgress = props => {
    const CircularProgressStyled = useStyle('CircularProgressStyled', CircularProgress, null)
    return <CircularProgressStyled {...props} />
}

export default WSCircularProgress
