import React from 'react'
import CharacteristicGroupItem from './CharacteristicGroupItem'

export default {
    title: 'molecules/list/CharacteristicGroupItem',
    component: CharacteristicGroupItem,
}

const Template = args => <CharacteristicGroupItem {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    key: 1,
    characteristicGroup: {
        id: 2,
        name: '222',
        orderNumber: 1,
        isAdminOnly: true,
        characteristics: [
            {
                id: 18,
                name: 'characteristic 01',
                isAdminOnly: true,
                isAvailableInFilter: true,
                orderNumber: 104,
                characteristicGroup: 10,
                characteristicValues: [],
            },
        ],
    },
    activeCharacteristicItem: 18,
    onMouseEnterCharacteristicItem: () => console.log('enter to item'),
    onMouseLeaveCharacteristicItem: () => console.log('leave item'),
    handleOpenCharacteristicModal: () => console.log('open characteristic modal'),
    isCharacteristicGroupInSet: () => true,
    isCharacteristicInSet: () => true,
    addRemoveCharacteristicGroupInSet: payload => () => console.log('add/remove characteristic group from set ', payload),
    addRemoveCharacteristicInSetGroup: payload => () => console.log('add/remove characteristic grom group ', payload),
}
