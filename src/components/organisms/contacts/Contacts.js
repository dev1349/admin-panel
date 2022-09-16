import React, { useCallback, useEffect, useState } from 'react'
import H1 from '../../atoms/textElements/headers/H1/H1'
import DeleteIcon from '../../atoms/icons/deleteIcon/DeleteIcon'
import TextAlignRightTemplate from '../../templates/textAlignRightTemplate/TextAlignRightTemplate'
import SimpleButton from '../../atoms/simpleButton/SimpleButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import ButtonsRightTemplate from '../../templates/buttonsRightTemplate/ButtonsRightTemplate'
import ContactPhone from '../../molecules/contactPhone/ContactPhone'
import AddShop from '../../molecules/addShop/AddShop'
import { postContacts } from '../../../api/contactsApi'
import { createValueForUpdating } from '../../../common/preparingDataForSending/preparingDataForSending'

const Contacts = ({ phones, setPhones, cities, setCities, citiesStarted, phonesStarted }) => {
    const handleChangePhones = payload => {
        setPhones(prev => {
            return { ...prev, [Object.keys(payload)[0]]: { ...prev[Object.keys(payload)[0]], phone: payload[Object.keys(payload)[0]] } }
        })
    }

    const handleDeletePhone = phoneName => () => {
        setPhones(prev => {
            const newPhones = { ...prev }
            delete newPhones[phoneName]
            delete validationResult[phoneName]
            return newPhones
        })
    }

    const handleAddPhone = () => {
        setPhones(prev => {
            const newPhones = { ...prev }
            const NextPhoneNumber = Math.max(...Object.keys(prev).map(key => Number(key.split('_')[1]))) + 1
            newPhones[`phone_${NextPhoneNumber}`] = {}
            return newPhones
        })
    }

    const isPhoneDeleteButton = Object.keys(phones).length - 1

    const isAddPhoneButtonDisabled = Object.keys(phones).reduce((acc, cur) => acc || !phones[cur], false)

    const initialCities = {
        city_1: {
            id: null,
            cityName: null,
            address: null,
            mod_fri: null,
            sat: null,
            sun: null,
        },
    }

    const handleChangeCities = cityName => payload => {
        setCities(prev => ({
            ...prev,
            [cityName]: { ...prev[cityName], ...payload },
        }))
    }

    const handleDeleteCity = cityName => () => {
        setCities(prev => {
            const newCities = { ...prev }
            delete newCities[cityName]
            return newCities
        })
    }

    const handleAddCity = () => {
        setCities(prev => {
            const newCities = { ...prev }
            const NextCityNumber = Math.max(...Object.keys(prev).map(key => Number(key.split('_')[1]))) + 1
            newCities[`city_${NextCityNumber}`] = {
                cityName: null,
                address: null,
                mod_fri: null,
                sat: null,
                sun: null,
            }
            return newCities
        })
    }

    const isCityDeleteButton = !!(Object.keys(cities).length - 1)

    const isAddCityButtonDisabled = Object.keys(cities).reduce(
        (acc, cur) => Object.keys(cities[cur]).reduce((subAcc, subCur) => subAcc && !cities[cur][subCur], true) || acc,
        false
    )

    const [clearTouch, setClearTouch] = useState(false)

    useEffect(() => {
        if (clearTouch) setClearTouch(false)
    }, [clearTouch, setClearTouch])

    const [validationResult, setValidationResult] = useState(null)

    const handleSetValidationResult = useCallback(payload => setValidationResult(prev => ({ ...prev, ...payload })), [setValidationResult])

    const handleSaveContacts = () => {
        const newData = {
            phoneContacts: Object.keys(phones).map(key => phones[key]),
            storeContacts: Object.keys(cities).map(key => cities[key]),
        }
        const startData = {
            phoneContacts: Object.keys(phonesStarted).map(key => phonesStarted[key]),
            storeContacts: Object.keys(citiesStarted).map(key => citiesStarted[key]),
        }

        const valueForUpdating = createValueForUpdating(startData, newData, [], 'HARD_DELETE')
        console.log(valueForUpdating)
        postContacts(valueForUpdating).then(() => {
            // updateFromServer() здесь нужно обновлять значения с сервера!!!
            console.log('lol')
        })
    }

    const handleClearContacts = () => {
        setClearTouch(true)
        setPhones({ phone_1: {} })
        setCities(initialCities)
    }

    const isClearButtonDisabled = () => {
        const phonesKeys = Object.keys(phones)
        const citiesKeys = Object.keys(cities)
        return (
            phonesKeys.length === 1 &&
            phones[phonesKeys[0]] === null &&
            citiesKeys.length === 1 &&
            cities[citiesKeys[0]].cityName === null &&
            cities[citiesKeys[0]].address === null &&
            cities[citiesKeys[0]].mod_fri === null &&
            cities[citiesKeys[0]].sat === null &&
            cities[citiesKeys[0]].sun === null
        )
    }

    const isValidPhones = () => {
        if (!validationResult) return
        const fields = Object.keys(validationResult)
        return fields.reduce((acc, current) => {
            const subFields = Object.keys(validationResult[current])
            return (
                acc &&
                subFields.reduce((subAcc, subCurrent) => {
                    return subAcc && validationResult[current][subCurrent]
                }, true)
            )
        }, true)
    }

    const canSaveContacts = isValidPhones() && !isAddCityButtonDisabled

    return (
        <>
            <H1>Контакты</H1>

            {Object.keys(phones).map((phone, index) => (
                <ContactPhone
                    key={phone}
                    phone={phone}
                    index={index}
                    phones={phones}
                    onChange={handleChangePhones}
                    setValidationResult={handleSetValidationResult}
                    clearTouch={clearTouch}
                    isPhoneDeleteButton={isPhoneDeleteButton}
                    deletePhone={handleDeletePhone}
                />
            ))}

            <TextAlignRightTemplate>
                <SimpleButton startIcon={<AddIcon />} onClick={handleAddPhone} disabled={isAddPhoneButtonDisabled}>
                    Еще добавить телефон
                </SimpleButton>
            </TextAlignRightTemplate>

            {Object.keys(cities).map((city, index) => (
                <AddShop
                    key={city}
                    index={index + 1}
                    city={city}
                    cities={cities}
                    onChange={handleChangeCities}
                    isCityDeleteButton={isCityDeleteButton}
                    deleteCity={handleDeleteCity}
                    clearTouch={clearTouch}
                    setValidationResult={handleSetValidationResult}
                />
            ))}

            <TextAlignRightTemplate>
                <SimpleButton startIcon={<AddIcon />} onClick={handleAddCity} disabled={isAddCityButtonDisabled}>
                    Еще добавить магазин
                </SimpleButton>
            </TextAlignRightTemplate>

            <ButtonsRightTemplate>
                <SimpleButton
                    startIcon={<DeleteIcon />}
                    onClick={handleClearContacts}
                    variant={'outlined'}
                    disabled={isClearButtonDisabled()}
                >
                    Удалить
                </SimpleButton>
                <SimpleButton startIcon={<SaveIcon />} onClick={handleSaveContacts} disabled={!canSaveContacts}>
                    Сохранить контакты
                </SimpleButton>
            </ButtonsRightTemplate>
        </>
    )
}

export default Contacts
