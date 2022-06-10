import React from 'react'
import CharacteristicItemReadOnly from './CharacteristicItemReadOnly'

export default {
    title: 'molecules/list/CharacteristicItemReadOnly',
    component: CharacteristicItemReadOnly,
}

const Template = args => <CharacteristicItemReadOnly {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    key: 215,
    characteristic: {
        id: 215,
        name: 'characteristic 01',
        isAdminOnly: true,
        isAvailableInFilter: true,
        orderNumber: 104,
        characteristicGroup: 10,
        characteristicValues: [
            {
                id: 118,
                value: 'yyy',
                characteristic: 215,
            },
            {
                id: 119,
                value: 'uuu',
                characteristic: 215,
            },
        ],
    },
    activeCharacteristicItem: 215,
    handleMouseEnterCharacteristicItem: () => console.log('enter to item'),
    handleMouseLeaveCharacteristicItem: () => console.log('leave item'),
    handleOpenCharacteristicModal: () => console.log('open characteristic modal'),
}
