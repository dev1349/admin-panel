import React from 'react'
import { FormControlLabel } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import FormControlLabelStyle from './FormControlLabelStyle'


const FormControlLabelWS = props => {
    const FormControlLabelStyled = useStyle('FormControlLabelStyled', FormControlLabel, FormControlLabelStyle, 'smallFontSize')
    return <FormControlLabelStyled {...props} />
}

export default FormControlLabelWS
