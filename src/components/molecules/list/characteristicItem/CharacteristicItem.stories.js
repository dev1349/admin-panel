import React from 'react'
import CharacteristicItem from './CharacteristicItem'

export default {
    title: 'molecules/list/CharacteristicItem',
    component: CharacteristicItem,
}

const Template = args => <CharacteristicItem {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    key: 18,
    characteristic: {
        id: 18,
        name: 'characteristic 01',
        isAdminOnly: true,
        isAvailableInFilter: true,
        orderNumber: 104,
        characteristicGroup: 10,
        characteristicValues: [],
    },
    activeCharacteristicItem: 18,
    handleMouseEnterCharacteristicItem: () => console.log('enter to item'),
    handleMouseLeaveCharacteristicItem: () => console.log('leave item'),
    handleOpenCharacteristicModal: () => console.log('open characteristic modal'),
    isCharacteristicInSet: () => true,
    addRemoveCharacteristicInSet: payload => () => console.log('add/remove characteristic group from set ', payload),
}
