import React from 'react'
import { FormControl } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const FormControlStyled = createStyled('FormControlStyle', FormControl, ['verticalLabelInput'])

const FormControlAtom = ({ children, ...rest }) => {
    return <FormControlStyled {...rest}>{children}</FormControlStyled>
}

export default FormControlAtom
