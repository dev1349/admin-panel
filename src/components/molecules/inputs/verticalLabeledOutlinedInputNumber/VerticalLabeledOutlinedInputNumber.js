import React from 'react'
import FormControl from '../../../atoms/inputs/formControl/FormControl'
import InputLabel from '../../../atoms/inputs/inputLabel/InputLabel'
import OutlinedInput from '../../../atoms/inputs/outlinedInput/OutlinedInput'

const VerticalLabeledOutlinedInputNumber = ({ id, labelText, value, onChange, pattern = /^[0-9]*$/ }) => {
    const handleChange = event => {
        if (pattern.test(event.target.value)) {
            const intValue = parseInt(event.target.value)
            if (intValue > Number.MAX_SAFE_INTEGER) return
            onChange(event.target.value === '' ? null : intValue)
        }
    }

    return (
        <FormControl verticalLabelInput>
            <InputLabel htmlFor={id}>{labelText}</InputLabel>
            <OutlinedInput
                id={id}
                value={value === null ? '' : value}
                onChange={handleChange}
                label={labelText}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
        </FormControl>
    )
}

export default VerticalLabeledOutlinedInputNumber
