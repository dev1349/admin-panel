import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCharacteristic from './AddCharacteristic'

export default {
    title: 'organisms/AddCharacteristic',
    component: AddCharacteristic,
}

const Template = args => (
    <BrowserRouter>
        <AddCharacteristic {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon dialogIcon />,
    title: 'Добавление характеристики товара',
    buttons: [
        <IconButton
            key={0}
            dialogButton
            disableRipple
            onClick={() => console.log('go back')}
        >
            <UndoIcon />
        </IconButton>,
        <IconButton
            key={1}
            dialogButton
            disableRipple
            onClick={() => console.log('save new characteristic')}
            disabled={false}
        >
            <SaveIcon />
        </IconButton>,
    ],
    characteristicField: {
        name: null,
        sortOrder: null,
        onlyForAdmin: false,
        forFilter: true,
        characteristicGroup: null,
        values: [],
    },
    changeCharacteristicFields: payload =>
        console.log('change characteristic value', payload),
    changeCharacteristicGroup: payload =>
        console.log('change characreristic group ', payload),
    characteristicGroups: [
        {
            id: 0,
            name: 'GroupName 01',
        },
        {
            id: 1,
            name: 'GroupName 02',
        },
        {
            id: 2,
            name: 'GroupName 03',
        },
        {
            id: 3,
            name: 'GroupName 04',
        },
        {
            id: 4,
            name: 'GroupName 05',
        },
    ],
    characteristicValues: [
        {
            id: 9,
            value: 'value 10',
        },
        {
            id: 10,
            value: 'value 11',
        },
        {
            id: 11,
            value: 'value 12',
        },
        {
            id: 12,
            value: 'value 13',
        },
        {
            id: 13,
            value: 'value 14',
        },
        {
            id: 14,
            value: 'value 15',
        },
    ],
    changeCharacteristicValue: payload =>
        console.log('change characteristic value ', payload),
    deleteCharacteristicValue: index => () =>
        console.log('delete characteristic value ', index),
    addCharacteristicValue: () => console.log('add new characteristic value'),
}
