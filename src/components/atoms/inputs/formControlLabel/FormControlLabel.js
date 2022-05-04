import React from 'react'
import { FormControlLabel } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const FormControlLabelWS = props => {
    const FormControlLabelStyled = useStyle('FormControlLabelStyle', FormControlLabel, 'smallFontSize')
    return <FormControlLabelStyled {...props} />
}

export default FormControlLabelWS
