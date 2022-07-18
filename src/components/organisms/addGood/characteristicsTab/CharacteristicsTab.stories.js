import React from 'react'
import CharacteristicsTab from './CharacteristicsTab'
import CategoryMock from '../../../../mock/categoryMockForStorybook'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'organisms/addGood/CharacteristicsTab',
    component: CharacteristicsTab,
}

const Template = args => (
    <BrowserRouter>
        <CharacteristicsTab {...args} />
    </BrowserRouter>
)

export const CharacteristicTabDefault = Template.bind({})
CharacteristicTabDefault.args = {
    goodProperties: {
        name: null,
        description: null,
        goodState: null,
        price: null,
        discountPrice: null,
        amount: null,
        category: 127,
        images: null,
    },
    changeGoodProperties: payload => console.log('change good properties ', payload),
    categories: CategoryMock,
    isPending: false,
    setValuesFromCharacteristicSelects: payload => console.log('set values from characteristicSelects ', payload),
    valuesFromCharacteristicSelects: {},
    activeCharacteristic: {
        id: 169,
        name: 'Characteristic 1001',
        isAdminOnly: false,
        isAvailableInFilter: true,
        orderNumber: 999,
        characteristicGroup: 29,
        characteristicValues: [
            {
                id: 97,
                value: 'ggg',
                characteristic: 169,
                command: null,
            },
            {
                id: 98,
                value: 'hhh',
                characteristic: 169,
                command: null,
            },
            {
                id: 100,
                value: 'kkk',
                characteristic: 169,
                command: null,
            },
            {
                id: 134,
                value: 'fff',
                characteristic: 169,
                command: null,
            },
            {
                id: 135,
                value: 'nnn',
                characteristic: 169,
                command: null,
            },
            {
                id: 152,
                value: '555',
                characteristic: 169,
                command: null,
            },
            {
                id: 153,
                value: '666',
                characteristic: 169,
                command: null,
            },
            {
                id: 154,
                value: '222',
                characteristic: 169,
                command: null,
            },
            {
                id: 155,
                value: '777',
                characteristic: 169,
                command: null,
            },
        ],
    },
    setActiveCharacteristic: payload => console.log('set active characteristic ', payload),
    saveCharacteristicNewValues: characteristic => console.log('save characteristics new values to server ', characteristic),
    characteristicGetGetPostPutDeleteFetchStatus: 'idle',
    getCategoryFromServer: (categoryId, callback) => console.log('get images from server ', categoryId, callback),
}
