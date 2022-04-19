import React from 'react'
import { TextField } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSTextField = props => {
    const MultilineFieldStyled = useStyle('MultilineFieldStyle', TextField)
    return <MultilineFieldStyled {...props} multiline rows={4}/>
}

export default WSTextField
