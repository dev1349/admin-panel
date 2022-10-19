import React from 'react'
import FormControl from '../../../atoms/inputs/formControl/FormControl'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import OutlinedInput from '../../../atoms/inputs/outlinedInput/OutlinedInput'

const VerticalLabeledOutlinedInput = ({ id, labelText, value, onChange, autoFocus }) => {
    const handleChange = event => onChange(event.target.value === '' ? null : event.target.value)

    return (
        <FormControl verticalLabelInput>
            <InputLabel htmlFor={id}>{labelText}</InputLabel>
            <OutlinedInput id={id} value={value === null ? '' : value} onChange={handleChange} label={labelText} autoFocus={autoFocus} />
        </FormControl>
    )
}

export default VerticalLabeledOutlinedInput
