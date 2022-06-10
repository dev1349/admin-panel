import React from 'react'
import CharacteristicGroupItemReadOnly from './CharacteristicGroupItemReadOnly'

export default {
    title: 'molecules/list/CharacteristicGroupItemReadOnly',
    component: CharacteristicGroupItemReadOnly,
}

const Template = args => <CharacteristicGroupItemReadOnly {...args} />

export const Example1 = Template.bind({})
Example1.args = {
    key: 2,
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
}
