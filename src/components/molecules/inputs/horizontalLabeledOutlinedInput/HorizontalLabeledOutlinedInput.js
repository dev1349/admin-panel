import React from 'react'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import OutlinedInput from '../../../atoms/inputs/outlinedInput/OutlinedInput'
import FormControl from '../../../atoms/inputs/formControl/FormControl'

const HorizontalLabeledOutlinedInput = ({ id, label, value, onChange, placeholder }) => {
    const handleOnChange = event => onChange(event.target.value === '' ? null : event.target.value)

    return (
        <FormControl labelInputContainer>
            <InputLabel htmlFor={id} shrink dialogLabel>
                {label}
            </InputLabel>
            <OutlinedInput id={id} value={value ? value : ''} onChange={handleOnChange} placeholder={placeholder} dialogInput fullWidth />
        </FormControl>
    )
}

export default HorizontalLabeledOutlinedInput
