import React, { useState } from 'react'
import { Autocomplete, styled } from '@mui/material'
import TextField from '../../../atoms/inputs/textField/TextField'
import AutocompleteItem from '../../../atoms/inputs/autocompleteItem/AutocompleteItem'

const AutocompleteStyled = styled(Autocomplete, {
    name: 'AutocompleteStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const AutocompleteWS = ({ textFieldId, name, value, changeValue, options }) => {
    const handleChange = (evt, newValue) => {
        changeValue({ [name]: newValue })
    }
    const [inputValue, setInputValue] = useState('')
    const createFullCityName = option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    }

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
            getOptionLabel={option => createFullCityName(option)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, option) => (
                <AutocompleteItem {...props}>
                    {createFullCityName(option)}
                </AutocompleteItem>
            )}
            renderInput={params => (
                <TextField {...params} id={textFieldId} fullWidth={true} />
            )}
        />
    )
}

export default AutocompleteWS
