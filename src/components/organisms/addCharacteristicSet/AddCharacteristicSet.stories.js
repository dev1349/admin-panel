import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import AddCharacteristicSet from './AddCharacteristicSet'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'

export default {
    title: 'organisms/AddCharacteristicSet',
    component: AddCharacteristicSet,
}

const Template = args => (
    <BrowserRouter>
        <AddCharacteristicSet {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon dialogIcon />,
    title: 'Добавление набора характеристик товара',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('go back')} disabled={true}>
            <UndoIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('save new set')} disabled={false}>
            <SaveIcon />
        </IconButton>,
    ],
    characteristicSetFieldValues: {
        name: null,
        characteristics: [],
        characteristicsGroup: [
            {
                characteristics: [],
                command: null,
                id: 25,
                isAdminOnly: true,
                name: 'Проверка',
                orderNumber: 11,
            },
            {
                characteristics: [],
                command: null,
                id: 21,
                isAdminOnly: false,
                name: 'OurFirstCharGroup2',
                orderNumber: 3,
            },
        ],
    },
    changeCharacteristicFieldValues: payload => () => console.log('change characteristic fields values ', payload),
    characteristicGroups: [
        {
            characteristics: [],
            command: null,
            id: 25,
            isAdminOnly: true,
            name: 'Проверка',
            orderNumber: 11,
        },
        {
            characteristics: [],
            command: null,
            id: 21,
            isAdminOnly: false,
            name: 'OurFirstCharGroup2',
            orderNumber: 3,
        },
    ],
    characteristicsWithoutGroup: [
        {
            characteristics: [],
            command: null,
            id: 26,
            isAdminOnly: true,
            name: 'Проверка 2',
            orderNumber: 11,
        },
        {
            characteristics: [],
            command: null,
            id: 27,
            isAdminOnly: false,
            name: 'OurFirstCharGroup22',
            orderNumber: 3,
        },
    ],
    isCharacteristicInSet: () => true,
    addRemoveCharacteristicInSet: payload => () => console.log('add remove characteristic in set ', payload),
    isCharacteristicGroupInSet: () => true,
    addRemoveCharacteristicGroupInSet: payload => () => console.log('add remove characteristic group in set ', payload),
    addRemoveCharacteristicInSetGroup: payload => () => console.log('add remove characteristic in set group ', payload),
}
