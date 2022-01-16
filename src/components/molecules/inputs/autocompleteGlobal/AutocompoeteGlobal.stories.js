import React from 'react'
import AutocompleteGlobal from './AutocompleteGlobal'

export default {
    title: 'molecules/inputs/AutocompleteGlobal',
    component: AutocompleteGlobal,
}

const Template = args => <AutocompleteGlobal {...args} />

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
    createOptionLabel: option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    },
}
