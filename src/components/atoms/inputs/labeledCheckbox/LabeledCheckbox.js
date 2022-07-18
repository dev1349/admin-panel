import React from 'react'
import { FormControlLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { createStyled } from '../../../../services/style/createStyled'

const LabeledCheckboxStyled = createStyled('LabeledCheckboxStyle', FormControlLabel, 'smallFontSize')

const LabeledCheckboxAtom = ({ name, label, checked, onChange, ...rest }) => {
    const handleChange = () => {
        onChange({ [name]: !checked })
    }
    return <LabeledCheckboxStyled control={<Checkbox checked={checked} onChange={handleChange} />} label={label} {...rest} />
}

export default LabeledCheckboxAtom
