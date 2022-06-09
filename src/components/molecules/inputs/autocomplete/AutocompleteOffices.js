import React, { useEffect, useState, useRef } from 'react'
import { Autocomplete } from '@mui/material'
import TextField from '../../../atoms/inputs/textField/TextField'
import { NOVAPOSHTA_API } from '../../../../api/apiConstants'
import { OfficesFetch } from '../../../../api/novaposhtaApi'
import { createStyled } from '../../../../services/style/createStyled'

const AutocompleteStyled = createStyled('AutocompleteStyle', Autocomplete, ['city', 'office'])
const AutocompleteOffices = ({ settlementRef, setSelectedOffice, officeFocused, inputValue, setInputValue }) => {
    const [options, setOptions] = useState([])
    const inpt = useRef(null)
    const queryParams = {
        apiKey: NOVAPOSHTA_API,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
            ...(settlementRef && { SettlementRef: settlementRef }),

            Limit: '50',
            Page: '1',
        },
    }
    useEffect(() => {
        OfficesFetch(queryParams).then(json => setOptions(json.data))
    }, [settlementRef])

    useEffect(() => {
        setTimeout(() => {
            officeFocused && inpt.current.focus()
        }, 500)
    }, [officeFocused])

    const getSelectedValue = (event, newValue, reason) => {
        if (reason === 'selectOption') {
            setSelectedOffice(newValue.Description)
            setInputValue(newValue.Description)
        } else if (reason === 'clear') {
            setInputValue('')
        }
    }

    return (
        <AutocompleteStyled
            disablePortal
            office
            id="inputOffice"
            options={options}
            renderInput={params => <TextField {...params} inputRef={inpt} label="Виберіть відділення" autoFocus={officeFocused} />}
            getOptionLabel={option => option.Description}
            onChange={getSelectedValue}
            openOnFocus={true}
            inputValue={inputValue}
        />
    )
}

export default AutocompleteOffices
