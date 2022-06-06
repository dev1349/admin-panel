import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@mui/material'
import TextField from '../../../atoms/inputs/textField/TextField'
import { NOVAPOSHTA_API } from '../../../../api/apiConstants'
import { CitiesFetch } from '../../../../api/novaposhtaApi'
import { createStyled } from '../../../../services/style/createStyled'

const AutocompleteStyled = createStyled('AutocompleteStyle', Autocomplete, ['city', 'office'])

const AutocompleteNP = ({ setSelectOption, setSelectedCity, setOfficeFocused, setInputOfficeValue }) => {
    const [inputVal, setInputVal] = useState('')
    const [options, setOptions] = useState([])
    const queryParams = {
        apiKey: NOVAPOSHTA_API,
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
            ...(inputVal && { CityName: inputVal }),

            Limit: '50',
            Page: '1',
        },
    }

    useEffect(() => {
        const timer = setTimeout(
            () => {
                CitiesFetch(queryParams).then(json => {
                    json.success === true ? setOptions(json.data[0].Addresses) : setInputVal('')
                })
            },

            500
        )
        !inputVal && setInputOfficeValue('') && setSelectOption('')
        return () => clearTimeout(timer)
    }, [inputVal])

    const getSelectedValue = (event, newValue, reason) => {
        if (reason === 'selectOption') {
            setSelectOption(newValue.Ref)
            setSelectedCity(newValue.Present)
            setOfficeFocused(true)
            setInputOfficeValue('')
        } else if (reason === 'clear') {
            setInputOfficeValue('')
        }
    }

    return (
        <AutocompleteStyled
            disablePortal
            city
            id="inputCity"
            options={options}
            renderInput={params => <TextField {...params} label="Ваше місто" />}
            onInputChange={(event, val) => setInputVal(val)}
            inputValue={inputVal}
            fullWidth={true}
            clearOnBlur={true}
            getOptionLabel={option => option.Present}
            noOptionsText="Введіть назву міста українською"
            isOptionEqualToValue={(option, value) => option.Ref === value.Ref}
            onChange={getSelectedValue}
            onOpen={() => setOfficeFocused(false)}
        />
    )
}

export default AutocompleteNP
