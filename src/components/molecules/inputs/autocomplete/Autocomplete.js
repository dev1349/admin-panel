import React, { useState } from 'react'
import { Autocomplete, styled } from '@mui/material'
import TextField from '../../../atoms/inputs/textField/TextField'
import AutocompleteItem from '../../../atoms/inputs/autocompleteItem/AutocompleteItem'
import useValidation from '../../../hooks/useValidation'

const AutocompleteStyled = styled(Autocomplete, {
    name: 'AutocompleteStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AutocompleteWS = ({
    textFieldId,
    name,
    value,
    changeValue,
    options,
    getOptionLabel,
    canAddValue,
    autoFocus,
    shouldValidate,
    required,
    validationRules,
    validatingNow,
    setValidationResult,
    haveHelperText,
    filterOptions,
    selectOnFocus,
    clearOnBlur,
    handleHomeEndKeys,
    isOptionEqualToValue,
    ...rest
}) => {
    const { handleBlur, errorMessage } = useValidation(
        name,
        value,
        required,
        shouldValidate,
        validationRules,
        validatingNow,
        setValidationResult
    )

    const handleChange = (evt, newValue) => {
        if (newValue?.inputValue) {
            changeValue({ [name]: newValue.inputValue })
            return
        }

        changeValue({ [name]: newValue })
    }
    const [inputValue, setInputValue] = useState('')

    return (
        <AutocompleteStyled
            id={'autocomplete_' + name}
            value={value}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue)
            }}
            autoHighlight
            autoComplete
            options={options}
            getOptionLabel={option => {
                if (option.inputValue) {
                    return getOptionLabel(option.inputValue)
                }

                return getOptionLabel(option)
            }}
            filterOptions={filterOptions}
            selectOnFocus={selectOnFocus}
            clearOnBlur={clearOnBlur}
            handleHomeEndKeys={handleHomeEndKeys}
            renderOption={(props, option) => (
                <AutocompleteItem {...props}>
                    {option.inputValue ? option.title : getOptionLabel(option)}
                </AutocompleteItem>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    id={textFieldId}
                    fullWidth={true}
                    onBlur={handleBlur}
                    error={!!errorMessage}
                    helperText={haveHelperText ? errorMessage || ' ' : ''}
                />
            )}
            freeSolo={canAddValue}
            autoFocus={autoFocus}
            isOptionEqualToValue={isOptionEqualToValue}
            {...rest}
        />
    )
}

export default AutocompleteWS
