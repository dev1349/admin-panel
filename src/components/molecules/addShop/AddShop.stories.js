import React from 'react'
import AddShop from './AddShop'

export default {
    title: 'molecules/AddShop',
    component: AddShop,
}

const Template = args => <AddShop {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    city: 'city_1',
    cities: {
        city_1: {
            cityName: 'Киев',
            address: null,
            mod_fri: null,
            sat: null,
            sun: null,
        },
        city_2: {
            cityName: null,
            address: null,
            mod_fri: null,
            sat: null,
            sun: null,
        },
        city_3: {
            cityName: null,
            address: null,
            mod_fri: null,
            sat: null,
            sun: null,
        },
    },
    onChange: () => () => console.log('change city parameters...'),
    isCityDeleteButton: true,
    deleteCity: () => () => console.log('delete city...'),
}
