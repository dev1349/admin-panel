import React from 'react'
import { FormControl } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const WSFormControl = ({ children, ...rest }) => {
    const FormControlStyled = useStyle('FormControlStyled', FormControl, null)
    return <FormControlStyled {...rest}>{children}</FormControlStyled>
}

export default WSFormControl
