import React, { useState } from 'react'
import { Autocomplete, styled } from '@mui/material'
import TextField from '../../../atoms/inputs/textField/TextField'
import AutocompleteItem from '../../../atoms/inputs/autocompleteItem/AutocompleteItem'

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
    createOptionLabel,
}) => {
    const handleChange = (evt, newValue) => {
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
            getOptionLabel={option => createOptionLabel(option)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, option) => (
                <AutocompleteItem {...props}>
                    {createOptionLabel(option)}
                </AutocompleteItem>
            )}
            renderInput={params => (
                <TextField {...params} id={textFieldId} fullWidth={true} />
            )}
        />
    )
}

export default AutocompleteWS
