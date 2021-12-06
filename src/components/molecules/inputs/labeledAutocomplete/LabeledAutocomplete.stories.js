import React from 'react'
import LabeledAutocomplete from './LabeledAutocomplete'

export default {
    title: 'molecules/inputs/LabeledAutocomplete',
    component: LabeledAutocomplete,
}

const Template = args => <LabeledAutocomplete {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    id: 'clientsAddress',
    label: 'Населенный пункт',
    name: 'clientsAddress',
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
