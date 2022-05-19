import React from 'react'
import TextField from '../../../atoms/inputs/textField/TextField'
import useValidation from '../../../hooks/useValidation'

const TextFieldMolecule = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    fullWidth,
    pattern,
    placeholder,
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    ...rest
}) => {
    const { handleBlur, transformValue, errorMessage } = useValidation(
        name,
        value,
        required,
        shouldValidate,
        validationRules,
        validatingNow,
        setValidationResult
    )

    const handleChange = evt => {
        const sendValue = evt.target.value === '' ? null : evt.target.value

        if (!pattern) {
            onChange({ [name]: sendValue })
        }

        if (pattern && new RegExp(pattern).test(evt.target.value)) {
            onChange({ [name]: sendValue })
        }
    }

    return (
        <TextField
            id={id}
            fullWidth={fullWidth}
            name={name}
            value={transformValue}
            onChange={handleChange}
            autoFocus={autoFocus}
            placeholder={placeholder}
            onBlur={handleBlur}
            error={!!errorMessage}
            helperText={haveHelperText ? errorMessage || ' ' : ''}
            {...rest}
        />
    )
}

export default TextFieldMolecule
