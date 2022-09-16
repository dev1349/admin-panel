import React, { useEffect, useState } from 'react'
import MaxWidthTemplate from '../../templates/maxWidthTemplate/MaxWidthTemplate'
import Contacts from '../../organisms/contacts/Contacts'
import { loadContacts } from '../../../api/contactsApi'

const ContactsPage = () => {
    const [phonesStarted, setPhonesStarted] = useState({})
    const [citiesStarted, setCitiesStarted] = useState({})
    const [phones, setPhones] = useState({
        phone_1: { id: null, phone: null },
    })
    const [cities, setCities] = useState({
        city_1: {
            name: null,
            address: null,
            phone: null,
            mod_fri: null,
            sat: null,
            sun: null,
        },
    })

    const updateFromServer = () => {
        loadContacts().then(contacts => {
            setPhones(() => {
                let newPhone = contacts.phoneContacts.reduce((PhonesObj, phone, index) => {
                    let newPhones = { ...PhonesObj }
                    newPhones[`phone_${index + 1}`] = { id: phone.id, phone: phone.phone }
                    return newPhones
                }, {})
                setPhonesStarted(newPhone)
                return newPhone
            })

            setCities(() => {
                let newCities = contacts.storeContacts.reduce((PhonesObj, store, index) => {
                    let newCity = { ...PhonesObj }
                    // console.log(newCity)
                    newCity[`city_${index + 1}`] = {
                        id: store.id,
                        name: store.name,
                        address: store.address,
                        phone: store.phone,
                        mod_fri: store.workingHoursMondayToFriday,
                        sat: store.workingHoursSaturday,
                        sun: store.workingHoursSunday,
                    }
                    return newCity
                }, {})

                setCitiesStarted(newCities)
                return newCities
            })
        })
    }
    useEffect(() => {
        updateFromServer()
    }, [])

    return (
        <MaxWidthTemplate>
            <Contacts
                phones={phones}
                setPhones={setPhones}
                cities={cities}
                setCities={setCities}
                citiesStarted={citiesStarted}
                phonesStarted={phonesStarted}
                setPhonesStarted={setPhonesStarted}
                setCitiesStarted={setCitiesStarted}
                updateFromServer={updateFromServer}
            />
        </MaxWidthTemplate>
    )
}

export default ContactsPage
