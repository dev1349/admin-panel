import React from 'react'
import { TextField } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const MultilineFieldStyled = createStyled('MultilineFieldStyle', TextField)

const WSTextField = props => {
    return <MultilineFieldStyled {...props} multiline rows={4} />
}

export default WSTextField
