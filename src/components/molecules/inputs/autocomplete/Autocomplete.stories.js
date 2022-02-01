import React from 'react'
import Autocomplete from './Autocomplete'
import { createFilterOptions } from '@mui/material'

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
    getOptionLabel: option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    },
    isOptionEqualToValue: (option, value) => {
        return (
            option.city === value.city &&
            option.district === value.district &&
            option.region === value.region
        )
    },
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
    getOptionLabel: option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    },
    isOptionEqualToValue: (option, value) => {
        return (
            option.city === value.city &&
            option.district === value.district &&
            option.region === value.region
        )
    },
}

const createFullCityName = option => {
    const optionValuesWithoutNull = Object.values(option).filter(item => item)
    return optionValuesWithoutNull.join(', ')
}

const filter = createFilterOptions()

export const Example3 = Template.bind({})
Example3.args = {
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
    getOptionLabel: option => {
        const optionValuesWithoutNull = Object.values(option).filter(
            item => item
        )
        return optionValuesWithoutNull.join(', ')
    },
    canAddValue: true,
    autoFocus: true,
    shouldValidate: true,
    required: true,
    validationRules: [
        {
            checking: value => value === '',
            errorMessage: 'Укажите населенный пункт',
        },
    ],
    validatingNow: true,
    setValidationResult: payload => console.log('payload = ', payload),
    haveHelperText: true,
    filterOptions: (options, params) => {
        const filtered = filter(options, params)

        const { inputValue } = params
        const inputValueArray = inputValue.split(', ')
        const optionKeys = Object.keys(options[0])
        const newValue = {}
        optionKeys.forEach(
            (key, index) => (newValue[key] = inputValueArray[index])
        )

        const isExisting = options.some(
            option => inputValue === createFullCityName(option)
        )

        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue: newValue,
                title: `Add "${inputValue}"`,
            })
        }

        return filtered
    },
    isOptionEqualToValue: (option, value) => {
        return (
            option.city === value.city &&
            option.district === value.district &&
            option.region === value.region
        )
    },
}
