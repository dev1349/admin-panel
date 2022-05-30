import React, { useMemo } from 'react'
import EmailField from '../../../atoms/inputs/emailField/EmailField'
import useValidation from '../../../../hooks/useValidation'

const EmailFieldMolecules = ({
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
    const resultRules = useMemo(
        () => [
            {
                checking: value => !new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i).test(value),
                errorMessage: validationRules || 'Адрес электронной почты указан неверно',
            },
        ],
        [validationRules]
    )

    const { handleBlur, transformValue, errorMessage } = useValidation(
        name,
        value,
        required,
        shouldValidate,
        resultRules,
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
        <EmailField
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

export default EmailFieldMolecules
