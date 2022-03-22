import React from 'react'
import { FormControlLabel, styled } from '@mui/material'

const FormControlLabelStyled = styled(FormControlLabel, {
    shouldForwardProp: prop => prop !== 'smallFontSize',
    name: 'FormControlLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FormControlLabelWS = props => {
    return <FormControlLabelStyled {...props} />
}

export default FormControlLabelWS
