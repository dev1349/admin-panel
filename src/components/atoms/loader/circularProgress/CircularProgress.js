import React from 'react'
import { CircularProgress } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const CircularProgressStyled = createStyled('CircularProgressStyle', CircularProgress, 'dialogProgress')

const WSCircularProgress = props => {
    return <CircularProgressStyled {...props} />
}

export default WSCircularProgress
