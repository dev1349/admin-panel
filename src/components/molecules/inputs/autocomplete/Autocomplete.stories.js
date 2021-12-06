import React from 'react'
import Autocomplete from './Autocomplete'

export default {
    title: 'molecules/inputs/Autocomplete',
    component: Autocomplete,
}

const Template = args => <Autocomplete {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    textFieldId: 'someId0',
    name: 'clientAddress',
    value: {
        city: 'Киев',
        district: null,
        region: 'Киевская обл.',
    },
    changeValue: payload => console.log('change', payload),
    options: [
        {
            city: 'Киев',
            district: null,
            region: 'Киевская обл.',
        },
        {
            city: 'Киевское',
            district: 'Новоодесский район',
            region: 'Николаевская обл.',
        },
        {
            city: 'Киевка',
            district: 'Голопристанский район',
            region: 'Днепровская обл.',
        },
        {
            city: 'Киевец',
            district: 'Николаевский район',
            region: 'Львовская обл.',
        },
        {
            city: 'Киевское',
            district: 'Новониколаевский район',
            region: 'Запорожская обл.',
        },
    ],
}

export const Example2 = Template.bind({})
Example2.args = {
    textFieldId: 'someId0',
    name: 'clientAddress',
    value: null,
    changeValue: payload => console.log('change', payload),
    options: [
        {
            city: 'Киев',
            district: null,
            region: 'Киевская обл.',
        },
        {
            city: 'Киевское',
            district: 'Новоодесский район',
            region: 'Николаевская обл.',
        },
        {
            city: 'Киевка',
            district: 'Голопристанский район',
            region: 'Днепровская обл.',
        },
        {
            city: 'Киевец',
            district: 'Николаевский район',
            region: 'Львовская обл.',
        },
        {
            city: 'Киевское',
            district: 'Новониколаевский район',
            region: 'Запорожская обл.',
        },
    ],
}
