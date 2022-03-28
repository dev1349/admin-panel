import { useCallback, useEffect, useMemo, useState } from 'react'

const useValidation = (
    name,
    value,
    required,
    shouldValidate,
    validationRules,
    validatingNow,
    setValidationResult,
    clearTouch = false
) => {
    const [touched, setTouched] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const transformValue = useMemo(() => (!value ? '' : value), [value])

    const createErrorMessage = useCallback(
        value => {
            if (!shouldValidate) return

            return validationRules.reduce((acc, el) => {
                if (el.checking(value)) {
                    return acc + (acc ? '. ' : ' ') + el.errorMessage
                }
                return acc
            }, '')
        },
        [shouldValidate, validationRules]
    )

    useEffect(() => {
        if (clearTouch) {
            setTouched(false)
        }
    }, [clearTouch, setTouched, setErrorMessage])

    useEffect(() => {
        if (validatingNow) {
            const errors = createErrorMessage(transformValue)
            setErrorMessage(errors)
        }
    }, [validatingNow, transformValue, createErrorMessage, setErrorMessage])

    useEffect(() => {
        if (validatingNow) {
            setTouched(true)
        }
    }, [validatingNow])

    useEffect(() => {
        if (touched) {
            const errors = createErrorMessage(transformValue)
            setErrorMessage(errors)
        } else {
            setErrorMessage('')
        }
    }, [touched, value, createErrorMessage, setErrorMessage])

    const getValidationResult = useCallback(
        value =>
            validationRules.reduce(
                (acc, current) => !current.checking(value) && acc,
                true
            ),
        [validationRules]
    )

    const isEmpty = useCallback(value => value === '', [])

    useEffect(() => {
        if (!setValidationResult || !shouldValidate || !required) return
        const validationResult = { [name]: {} }
        if (required) {
            validationResult[name].isNotEmpty = !isEmpty(transformValue)
        }
        if (shouldValidate) {
            validationResult[name].validationResult =
                getValidationResult(transformValue)
        }
        setValidationResult(validationResult)
    }, [setValidationResult, shouldValidate, required, transformValue])

    const handleBlur = () => {
        if (touched) return
        const errors = createErrorMessage(transformValue)
        setErrorMessage(errors)
        setTouched(true)
    }

    return { handleBlur, transformValue, errorMessage }
}

export default useValidation
