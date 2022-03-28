import React, { useMemo } from 'react'
import PhoneField from '../../../atoms/inputs/phoneField/PhoneField'
import useValidation from '../../../hooks/useValidation'

const PhoneFieldMolecules = ({
    id,
    name,
    value,
    onChange,
    autoFocus,
    fullWidth,
    pattern = /^\+?[0-9]*$/,
    placeholder,
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    clearTouch,
    ...rest
}) => {
    const resultRules = useMemo(
        () => [
            {
                checking: value => !new RegExp(/^(\+38)?0\d{9}$/).test(value),
                errorMessage:
                    validationRules ||
                    'Укажите телефон в формате "0XX XXX XX XX"',
            },
        ],
        [validationRules]
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

    const { handleBlur, transformValue, errorMessage } = useValidation(
        name,
        value,
        required,
        shouldValidate,
        resultRules,
        validatingNow,
        setValidationResult,
        clearTouch
    )

    return (
        <PhoneField
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

export default PhoneFieldMolecules
