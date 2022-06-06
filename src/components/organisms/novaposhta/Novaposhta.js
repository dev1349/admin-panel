import React, { useEffect, useState } from 'react'
import AutocompleteCity from '../../molecules/inputs/autocomplete/AutocompleteNP'
import AutocompleteOffices from '../../molecules/inputs/autocomplete/AutocompleteOffices'
import OfficeTemplate from '../../templates/npOfficeTemlate/NpOfficeTemplate'
import CityTemplate from '../../templates/npCityTemlate/NpCityTemplate'
import FlexTemplate from '../../templates/flexTemplate/FlexTemplate'

const AutocompleteNP = () => {
    const [settlementRef, setSettlementRef] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedOffice, setSelectedOffice] = useState('')
    const [officeFocused, setOfficeFocused] = useState(false)
    const [inputOfficeValue, setInputOfficeValue] = useState('')

    useEffect(() => {
        console.log(selectedCity)
    }, [selectedCity])
    useEffect(() => {
        console.log(selectedOffice)
    }, [selectedOffice])

    return (
        <FlexTemplate>
            <CityTemplate>
                <AutocompleteCity
                    setSelectOption={setSettlementRef}
                    setSelectedCity={setSelectedCity}
                    setOfficeFocused={setOfficeFocused}
                    setInputOfficeValue={setInputOfficeValue}
                />
            </CityTemplate>
            <OfficeTemplate>
                <AutocompleteOffices
                    settlementRef={settlementRef}
                    setSelectedOffice={setSelectedOffice}
                    officeFocused={officeFocused}
                    inputValue={inputOfficeValue}
                    setInputValue={setInputOfficeValue}
                />
            </OfficeTemplate>
        </FlexTemplate>
    )
}

export default AutocompleteNP
