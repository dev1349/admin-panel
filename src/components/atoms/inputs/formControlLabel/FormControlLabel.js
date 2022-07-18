import React from 'react'
import { FormControlLabel } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const FormControlLabelStyled = createStyled('FormControlLabelStyle', FormControlLabel, 'smallFontSize')

const FormControlLabelWS = props => {
    return <FormControlLabelStyled {...props} />
}

export default FormControlLabelWS
