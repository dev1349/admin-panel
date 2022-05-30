import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import IconButton from '../../molecules/buttons/iconButton/IconButton'
import AddIcon from '../../atoms/icons/addIcon/AddIcon'
import UndoIcon from '../../atoms/icons/undoIcon/UndoIcon'
import SaveIcon from '../../atoms/icons/saveIcon/SaveIcon'
import AddCharacteristicGroup from './AddCharacteristicGroup'

export default {
    title: 'organisms/AddCharacteristicGroup',
    component: AddCharacteristicGroup,
}

const Template = args => (
    <BrowserRouter>
        <AddCharacteristicGroup {...args} />
    </BrowserRouter>
)

export const Example1 = Template.bind({})
Example1.args = {
    icon: <AddIcon dialogIcon />,
    title: 'Добавление группы характеристик товара',
    buttons: [
        <IconButton key={0} dialogButton disableRipple onClick={() => console.log('go back')} disabled={false}>
            <UndoIcon />
        </IconButton>,
        <IconButton key={1} dialogButton disableRipple onClick={() => console.log('save group')} disabled={false}>
            <SaveIcon />
        </IconButton>,
    ],
    characteristicGroupField: {
        name: null,
        orderNumber: 999,
        isAdminOnly: false,
        characteristics: [],
    },
    changeCharacteristicGroupFields: payload => console.log('change characteristic value', payload),
    characteristics: [
        {
            characteristicGroup: null,
            characteristicValues: [],
            command: null,
            id: 210,
            isAdminOnly: false,
            isAvailableInFilter: true,
            name: 'Characteristic 005',
            orderNumber: 999,
        },
        {
            characteristicGroup: null,
            characteristicValues: [],
            command: null,
            id: 209,
            isAdminOnly: false,
            isAvailableInFilter: true,
            name: 'Characteristic 004',
            orderNumber: 999,
        },
        {
            characteristicGroup: null,
            characteristicValues: [{ id: 112, value: 'value16993', characteristic: 207, command: null }],
            command: null,
            id: 207,
            isAdminOnly: true,
            isAvailableInFilter: false,
            name: 'Updated23234234',
            orderNumber: 3,
        },
    ],
    isOpenCharacteristicListModal: true,
    onOpenCharacteristicListModal: () => console.log('open modal'),
    onCloseCharacteristicListModal: () => console.log('close modal'),
    isCharacteristicInGroup: () => true,
    addRemoveCharacteristic: payload => () => console.log('add remove characteristic ', payload),
    orderNumberHelper: 'Значение от 0 до 999',
}
