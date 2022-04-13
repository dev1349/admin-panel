import React from 'react'
import { TextField } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import MultilineFieldStyle from './MultilineFieldStyle'


const WSTextField = props => {
    const MultilineFieldStyled = useStyle('MultilineFieldStyled', TextField, MultilineFieldStyle)
    return <MultilineFieldStyled {...props} multiline rows={4}/>
}

export default WSTextField
