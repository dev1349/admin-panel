import React from 'react'
import { FormControlLabel } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { useStyle } from '../../../../hooks/useStyle'
import FormControlLabelStyle from '../formControlLabel/FormControlLabelStyle'


const FormControlLabelWS = ({ name, label, checked, onChange, ...rest }) => {
    const FormControlLabelStyled = useStyle('FormControlLabelStyled', FormControlLabel, FormControlLabelStyle)

    const handleChange = () => {
        onChange({ [name]: !checked })
    }
    return (
        <FormControlLabelStyled
            control={<Checkbox checked={checked} onChange={handleChange}/>}
            label={label}
            {...rest}
        />
    )
}

export default FormControlLabelWS
