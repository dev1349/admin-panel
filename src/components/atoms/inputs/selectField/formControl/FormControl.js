import React from 'react'
import { FormControl } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const WSFormControl = ({ children, ...rest }) => {
    const FormControlStyled = useStyle('FormControlStyle', FormControl)
    return <FormControlStyled {...rest}>{children}</FormControlStyled>
}

export default WSFormControl
