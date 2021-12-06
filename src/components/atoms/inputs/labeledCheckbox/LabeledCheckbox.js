import React from 'react'
import { FormControlLabel, styled } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

const FormControlLabelStyled = styled(FormControlLabel, {
    name: 'FormControlLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FormControlLabelWS = ({ name, label, checked, onChange, ...rest }) => {
    const handleChange = () => {
        onChange({ [name]: !checked })
    }
    return (
        <FormControlLabelStyled
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={label}
            {...rest}
        />
    )
}

export default FormControlLabelWS
